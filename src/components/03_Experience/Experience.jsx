import './Experience.css';
import { useTranslation } from 'react-i18next';
import { EXPERIENCE } from '../../data/experience';
import { formatDuration, formatMonthYear } from '../../utils/formatDuration';
import Reveal from '../common/Reveal';

function Experience() {
    const { t, i18n } = useTranslation();

    return (
        <div className='experience-container'>
            <Reveal>
                <p className='section-eyebrow'>{t('experience.eyebrow')}</p>
                <h2 className='section-heading'>{t('experience.heading')}</h2>
                <p className='section-subtext'>{t('experience.subtext')}</p>
            </Reveal>

            <div className='timeline'>
                {EXPERIENCE.map((job, index) => (
                    <Reveal as='div' key={job.id} className='timeline-item' delay={index * 100}>
                        <span className={`timeline-marker ${!job.end ? 'is-current' : ''}`} aria-hidden='true' />
                        <div className='timeline-card'>
                            <div className='timeline-card-head'>
                                <div>
                                    <h3 className='timeline-role'>{t(`experience.jobs.${job.id}.role`)}</h3>
                                    <p className='timeline-company'>{job.company}</p>
                                </div>
                                {!job.end && <span className='timeline-current-badge'>{t('experience.current')}</span>}
                            </div>
                            <p className='timeline-dates'>
                                {formatMonthYear(job.start, i18n.language)} &ndash; {job.end ? formatMonthYear(job.end, i18n.language) : t('experience.present')}
                                <span className='timeline-duration'> &middot; {formatDuration(job.start, job.end, t)}</span>
                            </p>
                            <ul className='timeline-highlights'>
                                {t(`experience.jobs.${job.id}.highlights`, { returnObjects: true }).map((point) => (
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

export default Experience;
