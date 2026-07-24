import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass, faUser, faBriefcase, faCode, faDiagramProject, faEnvelope,
    faSun, faMoon, faDownload, faCopy, faCheck, faGlobe, faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { scroller } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { SCROLL_DURATION, SCROLL_EASING } from '../../utils/scrollProps';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import resume from '../../assets/Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf.pdf';
import './CommandPalette.css';

const scrollToSection = (id) => scroller.scrollTo(id, {
    offset: -100,
    smooth: true,
    duration: SCROLL_DURATION,
    easing: SCROLL_EASING,
});

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf';
    link.click();
};

// eslint-disable-next-line react/prop-types
function CommandPalette({ isOpen, onClose }) {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    const commands = useMemo(() => [
        { id: 'about', label: t('commandPalette.goToAbout'), icon: faUser, action: () => scrollToSection('about') },
        { id: 'experience', label: t('commandPalette.goToExperience'), icon: faBriefcase, action: () => scrollToSection('experience') },
        { id: 'skills', label: t('commandPalette.goToSkills'), icon: faCode, action: () => scrollToSection('skills') },
        { id: 'services', label: t('commandPalette.goToServices'), icon: faHandshake, action: () => scrollToSection('services') },
        { id: 'projects', label: t('commandPalette.goToProjects'), icon: faDiagramProject, action: () => scrollToSection('projects') },
        { id: 'contact', label: t('commandPalette.goToContact'), icon: faEnvelope, action: () => scrollToSection('contact') },
        {
            id: 'theme',
            label: theme === 'dark' ? t('commandPalette.switchLight') : t('commandPalette.switchDark'),
            icon: theme === 'dark' ? faSun : faMoon,
            action: toggleTheme,
        },
        ...SUPPORTED_LANGUAGES.filter((lang) => lang.code !== i18n.language).map((lang) => ({
            id: `lang-${lang.code}`,
            label: `${t('commandPalette.switchLanguage')} ${lang.label}`,
            icon: faGlobe,
            action: () => i18n.changeLanguage(lang.code),
        })),
        { id: 'resume', label: t('commandPalette.downloadResume'), icon: faDownload, action: downloadResume },
        {
            id: 'github',
            label: t('commandPalette.openGithub'),
            icon: faGithub,
            action: () => window.open('https://github.com/Sethupathi2002', '_blank', 'noopener,noreferrer'),
        },
        {
            id: 'linkedin',
            label: t('commandPalette.openLinkedin'),
            icon: faLinkedin,
            action: () => window.open('https://www.linkedin.com/in/sethupathi-vijayakumar-11848a214/', '_blank', 'noopener,noreferrer'),
        },
        {
            id: 'email',
            label: copied ? t('commandPalette.emailCopied') : t('commandPalette.copyEmail'),
            icon: copied ? faCheck : faCopy,
            action: () => {
                navigator.clipboard.writeText('sethupathi.vk@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            },
            keepOpen: true,
        },
    ], [theme, toggleTheme, copied, t, i18n]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands;
        return commands.filter((c) => c.label.toLowerCase().includes(q));
    }, [commands, query]);

    const handleClose = () => {
        onClose();
        setQuery('');
        setActiveIndex(0);
    };

    const runCommand = (cmd) => {
        if (!cmd) return;
        cmd.action();
        if (!cmd.keepOpen) handleClose();
    };

    useEffect(() => {
        if (!isOpen) return undefined;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => { setActiveIndex(0); }, [query]);

    const handleInputKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            runCommand(filtered[activeIndex]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className='command-palette-backdrop' onClick={handleClose}>
            <div
                className='command-palette'
                role='dialog'
                aria-modal='true'
                aria-label={t('nav.openPalette')}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='command-palette-input-row'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='command-palette-search-icon' />
                    <input
                        ref={inputRef}
                        type='text'
                        placeholder={t('commandPalette.placeholder')}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                        aria-label={t('commandPalette.placeholder')}
                    />
                    <kbd>Esc</kbd>
                </div>
                <ul className='command-palette-list'>
                    {filtered.length === 0 && <li className='command-palette-empty'>{t('commandPalette.noResults')}</li>}
                    {filtered.map((cmd, index) => (
                        <li key={cmd.id}>
                            <button
                                type='button'
                                className={index === activeIndex ? 'is-active' : ''}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => runCommand(cmd)}
                            >
                                <FontAwesomeIcon icon={cmd.icon} />
                                <span>{cmd.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CommandPalette;
