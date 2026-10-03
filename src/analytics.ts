import { logEvent as firebaseLogEvent } from "firebase/analytics";
import { analytics } from "./firebase";
import { trackOpenAiDownloadClick } from "./openaiAds";

// Define strict types for our events to ensure consistency
export type AnalyticsEvent =
    | { name: 'select_content', params: { content_type: string; item_id: string; origin?: string; status?: string } }
    | { name: 'download_suggestion_click', params: { platform: 'ios' | 'android' } }
    | { name: 'download_click', params: { platform: 'ios' | 'android'; origin: string } }
    | { name: 'video_start', params: { video_id: string } }
    | { name: 'video_play', params: { video_id: string } }
    | { name: 'video_pause', params: { video_id: string; video_time: number; video_progress: number } }
    | { name: 'video_complete', params: { video_id: string } }
    | { name: 'video_replay', params: { video_id: string } }
    | { name: 'language_change', params: { language: string } }
    | { name: 'theme_change', params: { theme: 'light' | 'dark' } }
    | { name: 'social_click', params: { platform: string; origin?: string } }
    | { name: 'logo_click', params: { target: 'icon' | 'text' } }
    | { name: 'navigation_click', params: { target: string; origin?: string } }
    | { name: 'menu_click', params: { menu_id: string } }
    | { name: 'menu_dismiss', params: { menu_id: string; method?: string } }
    | { name: 'page_view', params: { page_path: string; page_title: string } }
    | { name: 'download_confirmation_view', params: { current_platform: string; clicked_store: string; recommended_store: string } }
    | { name: 'download_confirmation_confirm', params: { recommended_store: string } }
    | { name: 'download_confirmation_continue', params: { clicked_store: string } }
    | { name: 'download_confirmation_dismiss', params: { method?: string } }
    | {
        name: 'traffic_source',
        params: {
            source: string;
            medium?: string;
            campaign?: string;
            term?: string;
            content?: string;
        }
    };

export const logEvent = (event: AnalyticsEvent) => {
    try {
        // Log to console in development for easier debugging
        if (import.meta.env.DEV) {
            console.log(`[Analytics] ${event.name}`, event.params);
        }

        if (import.meta.env.PROD && analytics) {
            firebaseLogEvent(analytics, event.name as string, event.params as any);
        }

        if (event.name === 'download_click' || event.name === 'download_suggestion_click') {
            trackOpenAiDownloadClick(event.params.platform);
        }
    } catch (error) {
        console.warn("Analytics Error:", error);
    }
};
