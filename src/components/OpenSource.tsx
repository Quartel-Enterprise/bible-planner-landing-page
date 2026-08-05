import { useTranslation } from 'react-i18next';
import { Smartphone, Globe, AlertTriangle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useInView } from '../hooks/useInView';
import { logEvent } from '../analytics';

export function OpenSource() {
    const { t } = useTranslation();
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const openSourceProjects = [
        {
            icon: <Smartphone size={40} />,
            title: t('mobile_client'),
            link: 'https://github.com/Quartel-Enterprise/bible-planner-mobile-client',
            trackId: 'mobile'
        },
        {
            icon: <Globe size={40} />,
            title: t('web_client'),
            link: 'https://github.com/Quartel-Enterprise/bible-planner-web-client',
            trackId: 'web'
        }
    ];

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="open-source-section">
            <div className="container">
                <div className={isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}>
                    <h1 className="open-source-title">
                        {t('open_source_title')}
                    </h1>
                    <p className="open-source-message">
                        {t('open_source_message')}
                    </p>

                    <div className="open-source-warning">
                        <div style={{ color: '#eab308', flexShrink: 0, marginTop: '2px' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                            {t('open_source_warning')}
                        </p>
                    </div>
                </div>

                <div className="open-source-grid">
                    {openSourceProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`open-source-card ${isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => logEvent({ 
                                name: 'social_click', 
                                params: { 
                                    platform: 'github', 
                                    origin: `open_source_${project.trackId}` 
                                } 
                            })}
                        >
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                                {project.icon}
                            </div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>{project.title}</h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                                <GithubIcon size={20} />
                                <span>{t('view_on_github')}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
