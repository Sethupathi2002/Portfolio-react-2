/* eslint-disable react/prop-types -- project shape is defined in src/data/projects.js; no PropTypes dependency in this project */
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faXmark, faLock } from '@fortawesome/free-solid-svg-icons';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
    const { t } = useTranslation();
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!project) return undefined;

        closeButtonRef.current?.focus();
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div className='project-modal-backdrop' onClick={onClose}>
            <div
                className='project-modal'
                role='dialog'
                aria-modal='true'
                aria-labelledby='project-modal-title'
                onClick={(e) => e.stopPropagation()}
            >
                <button type='button' className='project-modal-close' onClick={onClose} aria-label={t('a11y.close')} ref={closeButtonRef}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className='project-modal-icon'>
                    <FontAwesomeIcon icon={project.icon} />
                </div>

                <h3 id='project-modal-title' className='project-modal-title'>{t(`projects.items.${project.id}.title`)}</h3>
                <p className='project-modal-role'>{t(`projects.items.${project.id}.role`)}</p>
                <p className='project-modal-overview'>{t(`projects.items.${project.id}.description`)}</p>

                <h4 className='project-modal-subheading'>{t('projects.whatIBuilt')}</h4>
                <ul className='project-modal-highlights'>
                    {t(`projects.items.${project.id}.highlights`, { returnObjects: true }).map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>

                <div className='project-modal-tech'>
                    {project.tech.map((tech) => (
                        <span key={tech} className='tech-tag'>{tech}</span>
                    ))}
                </div>

                {project.link ? (
                    <a href={project.link} target='_blank' rel='noreferrer' className='project-modal-cta'>
                        {t('projects.visitLive')}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                ) : (
                    <p className='project-modal-private'>
                        <FontAwesomeIcon icon={faLock} />
                        {t('projects.privateProject')}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ProjectModal;
