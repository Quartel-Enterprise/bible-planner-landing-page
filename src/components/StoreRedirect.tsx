import { useEffect } from 'react';
import { useStoreLinks } from '../hooks/useStoreLinks';
import { trackOpenAiDownloadClick } from '../openaiAds';

const PIXEL_FLUSH_DELAY_MS = 500;

interface StoreRedirectProps {
    platform: 'ios' | 'android';
}

export const StoreRedirect = ({ platform }: StoreRedirectProps) => {
    const { appStoreUrl, playStoreUrl } = useStoreLinks();

    useEffect(() => {
        const targetUrl = platform === 'ios' ? appStoreUrl : playStoreUrl;
        if (!targetUrl) return;
        trackOpenAiDownloadClick(platform);
        // The pixel batches events before sending; leaving at once could drop the download_click.
        const timeout = setTimeout(() => window.location.replace(targetUrl), PIXEL_FLUSH_DELAY_MS);
        return () => clearTimeout(timeout);
    }, [platform, appStoreUrl, playStoreUrl]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)'
        }}>
            <p>Redirecting to store...</p>
        </div>
    );
};
