import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { withInstallReferrer } from '../openaiAds';

export const useStoreLinks = () => {
    const { i18n } = useTranslation();

    const playStoreUrl = useMemo(() => {
        const lang = (i18n.language || 'en').split('-')[0];
        const baseUrl = 'https://play.google.com/store/apps/details?id=com.quare.bibleplanner';

        const localizedUrl = (() => {
            switch (lang) {
                case 'pt': return `${baseUrl}&hl=pt-BR`; // Brazil
                case 'es': return `${baseUrl}&hl=es`;    // Spanish (Generic)
                case 'en': return `${baseUrl}&hl=en`;    // English
                default: return baseUrl;
            }
        })();
        return withInstallReferrer(localizedUrl);
    }, [i18n.language]);

    const appStoreUrl = useMemo(() => {
        const lang = (i18n.language || 'en').split('-')[0];
        const baseUrl = 'https://apps.apple.com/us/app/bible-planner-reading-plans/id6756151777';

        // Base URL is already US (English)
        switch (lang) {
            case 'pt': return baseUrl.replace('/us/', '/br/'); // Brazil
            case 'es': return baseUrl.replace('/us/', '/es/'); // Spain/Latin America
            default: return baseUrl;
        }
    }, [i18n.language]);

    return { playStoreUrl, appStoreUrl };
};
