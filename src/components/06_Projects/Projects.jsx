/* eslint-disable react/prop-types -- project shape is defined in src/data/projects.js; no PropTypes dependency in this project */
import { useState } from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../../data/projects';
import Reveal from '../common/Reveal';
import ProjectModal from '../common/ProjectModal';
import { useTilt } from '../../hooks/useTilt';

function ProjectCard({ project, onSelect }) {
    const { t } = useTranslation();
    const tiltRef = useTilt();

    return (
        <button
            ref={tiltRef}
            type='button'
            className='project-card'
            onClick={onSelect}
        >
            <div className='project-icon'>
                <FontAwesomeIcon icon={project.icon} />
            </div>
            <h3 className='project-title'>{t(`projects.items.${project.id}.title`)}</h3>
            <p className='project-description'>{t(`projects.items.${project.id}.description`)}</p>
            <div className='project-tech'>
                {project.tech.map((tech) => (
                    <span key={tech} className='tech-tag'>{tech}</span>
                ))}
            </div>
            <span className='project-link-label'>
                {t('projects.viewCaseStudy')} <FontAwesomeIcon icon={faChevronRight} />
            </span>
        </button>
    );
}

function Projects() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className='projects-container'>
            <Reveal>
                <p className='section-eyebrow'>{t('projects.eyebrow')}</p>
                <h2 className='section-heading'>{t('projects.heading')}</h2>
                <p className='section-subtext'>{t('projects.subtext')}</p>
            </Reveal>

            <div className='projects-grid'>
                {PROJECTS.map((project, index) => (
                    <Reveal as='div' key={project.id} className='reveal-grid-item' delay={index * 70}>
                        <ProjectCard project={project} onSelect={() => setSelectedProject(project)} />
                    </Reveal>
                ))}
            </div>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}

export default Projects;
