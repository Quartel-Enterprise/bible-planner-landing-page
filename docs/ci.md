# CI

Every pull request into `main` runs these workflows (`.github/workflows/`):

| Workflow | What it does |
| --- | --- |
| `build` | `npm ci` and `npm run build` (TypeScript check, then Vite) on Node 24. Also runs on every push to `main`. |
| `claude-review` | The Claude review, when the pull request opens (see [AI review](#ai-review)). |
| `claude-review-on-request` | The Claude review again, when the `ai-review` label is added. |
| `claude-review-refs` | Fails when the workflows pin different releases of `Quartel-Enterprise/claude-review`. Runs only when `.github/workflows/` changes. |
| `merge-when-green` | Squash merges a pull request labeled `merge-when-green` once it is green (see [Merge when green](#merge-when-green)). |

`npm run lint` is not a check yet: it fails on `main` today.

Vercel deploys the site itself, outside these workflows: a preview for each pull request, production for `main`.

## AI review

Claude reviews a pull request at two points:

- **When it opens**, `claude-review` runs `/code-review high --max-findings all` with `--fix`: it applies the findings
  that are clear and contained, pushes them to the branch as a commit of `claude[bot]`, and posts one review. The fixed
  findings are listed in its body; each one left for the author is an inline comment, labelled 🔴 **Must fix**,
  🟡 **Should fix** or ⚪ **Nitpick**. A draft is reviewed when it is marked ready. Later pushes, the fix commit
  included, aren't reviewed again, with one exception: GitHub starts no `pull_request` workflow while a pull request
  conflicts with its base, so the push that solves a conflict the pull request opened with is reviewed then. Every
  other push runs `claude-review` too, which ends in seconds without reviewing (hence `synchronize` in its triggers,
  `actions: read`, and a concurrency group of its own per push).
- **On request**, the `ai-review` label runs `claude-review-on-request`: the same review, only commenting, told what
  the earlier reviews found so it doesn't repeat them. The label is removed when it ends. Use it after new pushes.

Both fail only when the run itself does (an expired token, the 30-minute timeout), never because of what they found.
They are skipped on pull requests from forks and Dependabot's, which get no secrets. claude-code-action refuses to run
when the pull request changes the workflow file that started it, so a change to a review workflow can only be tried
after it merges.

The review and the threads lookup are the `review` and `threads` actions of
[Quartel-Enterprise/claude-review](https://github.com/Quartel-Enterprise/claude-review), shared with the other apps.
Every `uses:` of them (`claude-review.yml`, `claude-review-on-request.yml`, `merge-when-green.yml`) pins the same exact
release, which `claude-review-refs` checks: bump all of them together. What runs comes from that release, never from
the pull request under review. How the review works and how it keeps tokens out of its comments are in that
repository's README. The action hides Claude's output, since this repository's logs are public.

The build is cheap, so it isn't gated on the review the way blitz-split-client's checks are (no `review-gate` or
`run-checks` here).

### Setup

- The [Claude GitHub App](https://github.com/apps/claude) installed on the repository.
- The `CLAUDE_CODE_OAUTH_TOKEN` secret, created with `claude setup-token` on the maintainer's account. Until it is set,
  or once it expires, the review fails on authentication: create a new one and update the secret.
- The `ai-review` and `merge-when-green` labels.
- The `MERGE_WHEN_GREEN_TOKEN` secret, for `merge-when-green` (see below).
- Recommended: a ruleset on `main` with **Require conversation resolution before merging**, so a manual merge can't
  skip an open review thread either. Don't make any check required: `claude-review-refs` only runs when workflows
  change, and a required check that never runs would block the pull request forever.

## Merge when green

Adding the `merge-when-green` label to a pull request makes the `merge-when-green` workflow squash merge it once every
check on its head commit has passed (`build`, the Claude review, Vercel's deployment, …) and every review conversation
is resolved, then remove the label. GitHub's own auto-merge can't do this: it waits only for required checks, and none
is required here.

The workflow runs when the label is added and each time a pull request workflow completes (the `workflow_run` list in
`merge-when-green.yml`), so the last check to finish triggers the merge. Since GitHub loses some of those events, a
`sweep` also checks every open labeled pull request on each push to `main`, every 15 minutes when GitHub fires the
schedule, and by hand (**Actions**, `merge-when-green`, **Run workflow**, optionally with a pull request number).

- The pull request's current head is the one judged; a push moves it, and the new checks have to pass again.
- A run of the head commit still in progress counts as unfinished, and so does a `claude-review` run of an earlier
  commit (it ends on the opening commit after pushing its fix commit). Runs started by a label don't count.
- A failed check leaves the pull request open with the label on; re-running it green merges it.
- A green pull request with an unresolved review conversation isn't merged: the label goes and a comment says why.
  Fix or answer each one, resolve them, then add the label again (resolving starts no workflow).
- A merge GitHub refuses with everything green (a conflict with `main`) also removes the label, with a comment.
- Drafts wait until they are marked ready; pull requests from forks are never merged.

The merge uses the `MERGE_WHEN_GREEN_TOKEN` secret, not `GITHUB_TOKEN`: a merge made with `GITHUB_TOKEN` triggers no
other workflow, so the push to `main` would run none of its workflows. The merge shows up as made by the token's owner.
Until the secret is set, or once the token expires, the workflow fails with an error that names it.

**Manual setup** (Pierre): create a fine-grained personal access token restricted to this repository, with Actions,
Contents and Pull requests set to Read and write, and save it as the `MERGE_WHEN_GREEN_TOKEN` repository secret.

## Adding a workflow

When a pull request workflow is added or renamed, update the `workflow_run` list in `merge-when-green.yml`: a workflow
missing from it still blocks the merge while it runs, but its completion doesn't trigger one. A workflow started by a
label goes in the list of label workflows of its `Check whether every check passed` step instead.
