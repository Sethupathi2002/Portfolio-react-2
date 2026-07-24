import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSun, faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// react scroll
import { Link as ScrollLink } from 'react-scroll';

import { useTheme } from '../../context/ThemeContext';
import { SCROLL_LINK_PROPS } from '../../utils/scrollProps';
import LanguageSwitcher from '../common/LanguageSwitcher';

const NAV_LINK_IDS = ['about', 'experience', 'skills', 'services', 'projects', 'contact'];

// eslint-disable-next-line react/prop-types
function NavBar({ onOpenPalette }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${isScrolled ? 'nav-scrolled' : ''}`}>
            <ScrollLink to="about" {...SCROLL_LINK_PROPS} className='navbar-heading' onClick={closeMenu}>
                <span className='navbar-heading-brace'>&lt;</span>
                Sethupathi
                <span className='navbar-heading-brace'>/&gt;</span>
            </ScrollLink>

            <div className='navbar-links'>
                <ul className={`navbar-links-list ${isOpen ? 'is-open' : ''}`}>
                    {NAV_LINK_IDS.map((id) => (
                        <li key={id}>
                            <ScrollLink
                                to={id}
                                className='navbar-links-list-item'
                                activeClass='is-active'
                                spy={true}
                                {...SCROLL_LINK_PROPS}
                                onClick={closeMenu}
                            >
                                {t(`nav.${id}`)}
                            </ScrollLink>
                        </li>
                    ))}
                    <li className='navbar-mobile-theme'>
                        <button
                            type='button'
                            className='theme-toggle theme-toggle-mobile'
                            onClick={() => { onOpenPalette(); closeMenu(); }}
                            aria-label={t('nav.openPalette')}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <span>{t('nav.searchCommands')}</span>
                        </button>
                        <button
                            type='button'
                            className='theme-toggle theme-toggle-mobile'
                            onClick={toggleTheme}
                            aria-label={t('nav.toggleTheme')}
                        >
                            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                            <span>{theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}</span>
                        </button>
                        <LanguageSwitcher />
                    </li>
                </ul>

                <button
                    type='button'
                    className='theme-toggle theme-toggle-desktop palette-trigger'
                    onClick={onOpenPalette}
                    aria-label={t('nav.openPalette')}
                    title={t('nav.paletteHint')}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <kbd className='palette-trigger-kbd'>⌘K</kbd>
                </button>

                <LanguageSwitcher />

                <button
                    type='button'
                    className='theme-toggle theme-toggle-desktop'
                    onClick={toggleTheme}
                    aria-label={t('nav.toggleTheme')}
                >
                    <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                </button>

                <button
                    type='button'
                    className='navbar-baricon'
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                    aria-expanded={isOpen}
                >
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </button>
            </div>

            {isOpen && <div className='navbar-backdrop' onClick={closeMenu} />}

            <div className='nav-progress-track' aria-hidden='true'>
                <div className='nav-progress-bar' style={{ width: `${scrollProgress}%` }} />
            </div>
        </nav>
    );
}

export default NavBar;
