# Bible Planner - Landing Page

A modern, multilingual landing page for the Bible Planner mobile application. Built with React, TypeScript, and Vite, featuring a beautiful design with dark/light theme support and complete internationalization.

🌐 **Live Site**: [https://bibleplanner.app/](https://www.bibleplanner.app/)

<img src="./public/logo.png" alt="Screenshot" />

## ✨ Features

- 🌍 **Multilingual Support** - Available in English, Portuguese (BR), and Spanish
- 🌓 **Dark/Light Theme** - Automatic system preference detection with manual toggle
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🎨 **Modern UI** - Beautiful animations and smooth transitions
- 🚀 **Fast Performance** - Built with Vite for lightning-fast builds
- ♿ **Accessible** - Follows web accessibility best practices
- 🔒 **Privacy-First** - Dedicated privacy policy page
- 📲 **Smart Platform Detection** - Automatically prioritizes iOS/Android buttons based on user's device
- 📈 **UTM Tracking** - Built-in support for tracking traffic sources via standard UTM parameters

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling
- **Vanilla CSS** - Pure CSS with CSS Variables
- **CSS Animations** - Smooth fade-in and slide-up effects

### Internationalization
- **react-i18next** - React integration for i18next
- **i18next** - Internationalization framework
- **i18next-browser-languagedetector** - Automatic language detection

### Icons
- **lucide-react** - Modern icon library
- **Custom SVG Components** - Platform-specific icons (Android, Apple, Windows)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/bible-planner-web-client.git
cd bible-planner-web-client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy
The project can be deployed to any static hosting service:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use GitHub Actions
- **Firebase Hosting** - `firebase deploy`

## 🌍 Supported Languages

- 🇺🇸 **English** (en)
- 🇧🇷 **Portuguese** (pt-BR)
- 🇪🇸 **Spanish** (es)

The language is automatically detected from the browser settings, but users can manually switch languages using the language selector in the header.

## 🎨 Theming

The application supports both light and dark themes:

- **Automatic Detection**: Respects user's system preference (`prefers-color-scheme`)
- **Manual Toggle**: Users can switch themes using the sun/moon icon in the header

## 📊 Analytics

For a detailed list of tracked events, see [Analytics Events](docs/analytics_events.md).

## 🎛️ Remote Configuration

The application uses Firebase Remote Config for real-time feature management. For setup instructions, see [Remote Configuration](docs/remote_config.md).

## 🔁 CI

Every pull request is built (`npm run build`) and reviewed by Claude when it opens; the `ai-review` label asks for another review. The `merge-when-green` label squash merges a pull request once every check passed and every review conversation is resolved. See [CI](docs/ci.md), including the secrets it needs.

## 📄 License

This project is part of the Bible Planner application suite.

© 2025 Quartel Enterprise. All rights reserved.

---

**Made with ❤️ for Bible readers worldwide**
