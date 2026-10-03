import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AppPreview } from './components/AppPreview'
import { logEvent } from './analytics'
import { trackOpenAiPageView } from './openaiAds'

const Features = lazy(() => import('./components/Features').then(module => ({ default: module.Features })));

const CTASection = lazy(() => import('./components/CTASection').then(module => ({ default: module.CTASection })));

const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(module => ({ default: module.TermsOfService })));
const OpenSource = lazy(() => import('./components/OpenSource').then(module => ({ default: module.OpenSource })));
const StoreRedirectStub = lazy(() => import('./components/StoreRedirect').then(module => ({ default: module.StoreRedirect })));

function LanguageRedirect({ to }: { to?: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    let targetLang = 'en'; // default to English

    if (browserLang.startsWith('pt')) {
      targetLang = 'pt';
    } else if (browserLang.startsWith('es')) {
      targetLang = 'es';
    }

    // Redirect to detected language
    const search = window.location.search;
    const targetPath = to ? `/${targetLang}/${to}${search}` : `/${targetLang}${search}`;
    navigate(targetPath, { replace: true });
  }, [navigate, to]);

  return null;
}

function AppContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();

  // Initialize theme from system preference or default to light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Update language based on route
  useEffect(() => {
    if (lang && ['en', 'pt', 'es'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Update page title based on current page and language
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/privacy')) {
      document.title = `${t('privacy_policy')} - ${t('app_title')}`;
    } else if (path.includes('/terms')) {
      document.title = `${t('terms_of_service')} - ${t('app_title')}`;
    } else if (path.includes('/open-source')) {
      document.title = `${t('open_source')} - ${t('app_title')}`;
    } else {
      document.title = t('app_title');
    }

    // Log page_view event
    logEvent({
      name: 'page_view',
      params: {
        page_path: path,
        page_title: document.title
      }
    });
    trackOpenAiPageView(path, document.title);
  }, [t, i18n.language, location.pathname]); // Added pathname dependency to re-run on route change

  // Log UTM parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const utmSource = searchParams.get('utm_source');

    if (utmSource) {
      logEvent({
        name: 'traffic_source',
        params: {
          source: utmSource,
          medium: searchParams.get('utm_medium') || undefined,
          campaign: searchParams.get('utm_campaign') || undefined,
          term: searchParams.get('utm_term') || undefined,
          content: searchParams.get('utm_content') || undefined
        }
      });
    }
  }, [location.search]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (page: 'home' | 'privacy' | 'terms' | 'open-source') => {
    const currentLang = i18n.language.split('-')[0];
    if (page === 'home') {
      navigate(`/${currentLang}`);
    } else if (page === 'privacy') {
      navigate(`/${currentLang}/privacy`);
    } else if (page === 'open-source') {
      navigate(`/${currentLang}/open-source`);
    } else {
      navigate(`/${currentLang}/terms`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header theme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="" element={<><div className="hero-preview-container"><Hero /><AppPreview /></div><Suspense fallback={null}><Features /></Suspense><Suspense fallback={null}><CTASection /></Suspense></>} />
          <Route path="privacy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
          <Route path="terms" element={<Suspense fallback={<div>Loading...</div>}><TermsOfService /></Suspense>} />
          <Route path="open-source" element={<Suspense fallback={<div>Loading...</div>}><OpenSource /></Suspense>} />
          <Route path="download/ios" element={<Suspense fallback={<div>Redirecting...</div>}><StoreRedirectStub platform="ios" /></Suspense>} />
          <Route path="download/android" element={<Suspense fallback={<div>Redirecting...</div>}><StoreRedirectStub platform="android" /></Suspense>} />
        </Routes>
      </main>
      <Suspense fallback={null}><Footer onNavigate={handleNavigate} /></Suspense>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Detect language and redirect */}
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/privacy" element={<LanguageRedirect to="privacy" />} />
        <Route path="/terms" element={<LanguageRedirect to="terms" />} />
        <Route path="/open-source" element={<LanguageRedirect to="open-source" />} />
        <Route path="/download/ios" element={<LanguageRedirect to="download/ios" />} />
        <Route path="/download/android" element={<LanguageRedirect to="download/android" />} />

        {/* Language-specific routes */}
        <Route path="/:lang/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
