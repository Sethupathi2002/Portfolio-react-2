import { useState } from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SKILL_CATEGORIES } from '../../data/skills';
import Reveal from '../common/Reveal';

function Skills() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id);
    const currentCategory = SKILL_CATEGORIES.find((category) => category.id === activeCategory);

    return (
        <div className='skills-container'>
            <Reveal>
                <p className='section-eyebrow'>{t('skills.eyebrow')}</p>
                <h2 className='section-heading'>{t('skills.heading')}</h2>
                <p className='section-subtext'>{t('skills.subtext')}</p>
            </Reveal>

            <Reveal delay={100} className='skills-tabs' role='tablist' aria-label={t('skills.heading')}>
                {SKILL_CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        type='button'
                        role='tab'
                        aria-selected={activeCategory === category.id}
                        className={`skills-tab ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {t(`skills.categories.${category.id}.label`)}
                    </button>
                ))}
            </Reveal>

            <div className='skills-grid'>
                {currentCategory.skills.map((skill, index) => (
                    <Reveal as='div' key={skill.id} className='reveal-grid-item' delay={index * 70}>
                        <div className='skill-card'>
                            <div className='skill-card-head'>
                                <span className='skill-icon'>
                                    <FontAwesomeIcon icon={skill.icon} />
                                </span>
                                <h3>{t(`skills.categories.${currentCategory.id}.items.${skill.id}.name`)}</h3>
                            </div>
                            <p className='skill-description'>
                                {t(`skills.categories.${currentCategory.id}.items.${skill.id}.description`)}
                            </p>
                            <div className='skill-bar-track'>
                                <div className='skill-bar-fill' style={{ width: `${skill.level}%` }} />
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}

export default Skills;
