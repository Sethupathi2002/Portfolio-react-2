import './Services.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SERVICES } from '../../data/services';
import Reveal from '../common/Reveal';

function Services() {
    const { t } = useTranslation();

    return (
        <div className='services-container'>
            <Reveal>
                <p className='section-eyebrow'>{t('services.eyebrow')}</p>
                <h2 className='section-heading'>{t('services.heading')}</h2>
                <p className='section-subtext'>{t('services.subtext')}</p>
            </Reveal>

            <div className='services-grid'>
                {SERVICES.map((service, index) => (
                    <Reveal as='div' key={service.id} className='reveal-grid-item' delay={index * 70}>
                        <div className='service-card'>
                            <div className='service-icon'>
                                <FontAwesomeIcon icon={service.icon} />
                            </div>
                            <h3 className='service-title'>{t(`services.items.${service.id}.title`)}</h3>
                            <p className='service-description'>{t(`services.items.${service.id}.description`)}</p>
                            <ul className='service-highlights'>
                                {t(`services.items.${service.id}.highlights`, { returnObjects: true }).map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}

export default Services;
