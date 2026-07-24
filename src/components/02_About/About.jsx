import './About.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { SOCIAL_LINKS } from '../../data/socials';
import { SCROLL_LINK_PROPS } from '../../utils/scrollProps';
import Reveal from '../common/Reveal';
import Marquee from '../common/Marquee';
import { useSpotlight } from '../../hooks/useSpotlight';
import { useTypewriter } from '../../hooks/useTypewriter';

function About() {
    const { t } = useTranslation();
    const spotlightRef = useSpotlight();
    const roles = t('hero.roles', { returnObjects: true });
    const animatedRole = useTypewriter(Array.isArray(roles) ? roles : [t('hero.role')]);

    const stats = [
        { value: '3+', label: t('hero.statYears') },
        { value: '10+', label: t('hero.statTech') },
        { value: t('hero.statFocusValue'), label: t('hero.statFocusLabel') },
    ];

    return (
        <>
        <main id='main-content' ref={spotlightRef}>
            <Reveal as='div' direction='left' className='hero-content'>
                <p className='section-eyebrow'>{t('hero.eyebrow')}</p>
                <h1 className='hero-name'>
                    Sethupathi <span className='hero-name-accent'>Vijayakumar</span>
                </h1>
                <h2 className='hero-role'>
                    {animatedRole}
                    <span className='hero-role-cursor' aria-hidden='true' />
                </h2>

                <p className='hero-bio'>{t('hero.bio')}</p>

                <p className='hero-status-line'>{t('hero.statusLine')}</p>

                <div className='hero-stats'>
                    {stats.map((stat) => (
                        <div className='hero-stat' key={stat.label}>
                            <span className='hero-stat-value'>{stat.value}</span>
                            <span className='hero-stat-label'>{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className='hero-actions'>
                    <ScrollLink to='projects' {...SCROLL_LINK_PROPS} className='hero-btn hero-btn-primary'>
                        {t('hero.ctaWork')}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </ScrollLink>
                    <ScrollLink to='contact' {...SCROLL_LINK_PROPS} className='hero-btn hero-btn-outline'>
                        {t('hero.ctaContact')}
                    </ScrollLink>
                </div>

                <div className='hero-socials'>
                    {SOCIAL_LINKS.map((social) => (
                        <a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label}>
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    ))}
                </div>
            </Reveal>

            <Reveal as='div' direction='right' delay={150} className='hero-visual'>
                <div className='hero-visual-glow' aria-hidden='true' />
                <div className='code-window' role='img' aria-label={t('hero.codeWindowAlt')}>
                    <div className='code-window-bar'>
                        <span className='code-dot code-dot-red' />
                        <span className='code-dot code-dot-yellow' />
                        <span className='code-dot code-dot-green' />
                        <span className='code-window-title'>developer.js</span>
                    </div>
                    <pre className='code-window-body'>
                        <code>
                            <span className='code-kw'>const</span> developer = {'{'}{'\n'}
                            {'  '}<span className='code-key'>name</span>: <span className='code-str'>&apos;Sethupathi Vijayakumar&apos;</span>,{'\n'}
                            {'  '}<span className='code-key'>role</span>: <span className='code-str'>&apos;{t('hero.role')}&apos;</span>,{'\n'}
                            {'  '}<span className='code-key'>experience</span>: <span className='code-str'>&apos;{t('hero.codeExperience')}&apos;</span>,{'\n'}
                            {'  '}<span className='code-key'>stack</span>: [{'\n'}
                            {'    '}<span className='code-str'>&apos;Java&apos;</span>,{'\n'}
                            {'    '}<span className='code-str'>&apos;Python&apos;</span>,{'\n'}
                            {'    '}<span className='code-str'>&apos;FastAPI&apos;</span>,{'\n'}
                            {'    '}<span className='code-str'>&apos;React&apos;</span>,{'\n'}
                            {'    '}<span className='code-str'>&apos;React Native&apos;</span>,{'\n'}
                            {'  '}],{'\n'}
                            {'  '}<span className='code-key'>focus</span>: <span className='code-str'>&apos;{t('hero.codeFocus')}&apos;</span>,{'\n'}
                            {'  '}<span className='code-key'>hireable</span>: <span className='code-bool'>true</span>,{'\n'}
                            {'}'}
                            {';'}
                        </code>
                    </pre>
                </div>
            </Reveal>
        </main>
        <Marquee />
        </>
    );
}

export default About;
