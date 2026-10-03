// OpenAI Ads measurement pixel helpers. The base snippet lives in index.html (so it captures the
// `oppref` of the landing URL before the language redirect runs); this module only sends events
// and hands the attribution data to the Play Store install referrer.

declare global {
    interface Window {
        oaiq?: (...args: unknown[]) => void;
    }
}

const OPPREF_PARAM = 'oppref';
const OPPREF_COOKIE = '__oppref';
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const UTM_STORAGE_KEY = 'landing_utm';

const measure = (...args: unknown[]) => {
    try {
        window.oaiq?.('measure', ...args);
    } catch (error) {
        console.warn('OpenAI Ads Error:', error);
    }
};

// App.tsx re-runs its page_view effect whenever the title's translation changes; the pixel should
// only count actual navigations.
let lastTrackedPath: string | null = null;

export const trackOpenAiPageView = (pagePath: string, pageTitle: string) => {
    if (pagePath === lastTrackedPath) return;
    lastTrackedPath = pagePath;
    measure('page_viewed', {
        type: 'contents',
        contents: [{ id: pagePath, name: pageTitle, content_type: 'page' }],
    });
};

// Middle step of the ad funnel (landing page → store click → app_installed). Custom event, so the
// Ads Manager conversion must be created as a custom event named exactly `download_click`.
export const trackOpenAiDownloadClick = (platform: 'ios' | 'android') => {
    measure('custom', { type: 'custom' }, { custom_event_name: 'download_click' });
    if (import.meta.env.DEV) {
        console.log('[OpenAI Ads] download_click', platform);
    }
};

// The pixel stores the ad click's `oppref` in a cookie, but writes it asynchronously once its SDK
// loads, so a click right after landing still needs the URL parameter.
export const getOppref = (): string | null => {
    try {
        const fromUrl = new URLSearchParams(window.location.search).get(OPPREF_PARAM);
        if (fromUrl) return fromUrl;

        const cookie = document.cookie
            .split('; ')
            .find(entry => entry.startsWith(`${OPPREF_COOKIE}=`));
        return cookie ? decodeURIComponent(cookie.slice(OPPREF_COOKIE.length + 1)) || null : null;
    } catch {
        return null;
    }
};

// In-app navigation drops the query string, so the landing UTMs are kept for the whole visit.
const captureLandingUtm = (): Record<string, string> => {
    const fromUrl: Record<string, string> = {};
    const search = new URLSearchParams(window.location.search);
    UTM_PARAMS.forEach(key => {
        const value = search.get(key);
        if (value) fromUrl[key] = value;
    });
    try {
        if (Object.keys(fromUrl).length > 0) {
            sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
            return fromUrl;
        }
        return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) ?? '{}');
    } catch {
        return fromUrl;
    }
};

const landingUtm = captureLandingUtm();

// Google Play forwards `referrer` to the app on first launch: Firebase Analytics reads the utm_*
// keys to attribute first_open, and the app reads `oppref` to report an attributed app_installed to
// the backend (bible-planner-api: track-app-install).
export const withInstallReferrer = (playStoreUrl: string): string => {
    const oppref = getOppref();
    const referrer = new URLSearchParams(landingUtm);
    if (oppref) {
        // An OpenAI ad click without a tracking template still lands in Firebase as OpenAI traffic.
        if (!referrer.has('utm_source')) referrer.set('utm_source', 'openai');
        if (!referrer.has('utm_medium')) referrer.set('utm_medium', 'cpc');
        referrer.set(OPPREF_PARAM, oppref);
    }
    const query = referrer.toString();
    return query ? `${playStoreUrl}&referrer=${encodeURIComponent(query)}` : playStoreUrl;
};
