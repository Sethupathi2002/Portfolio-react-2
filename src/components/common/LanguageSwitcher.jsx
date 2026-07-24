import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const current = SUPPORTED_LANGUAGES.find((lang) => lang.code === i18n.language) || SUPPORTED_LANGUAGES[0];

    const selectLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className='language-switcher' ref={wrapperRef}>
            <button
                type='button'
                className='theme-toggle language-switcher-trigger'
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={t('nav.language')}
                aria-expanded={isOpen}
            >
                <FontAwesomeIcon icon={faGlobe} />
                <span className='language-switcher-code'>{current.code.toUpperCase()}</span>
            </button>

            {isOpen && (
                <ul className='language-switcher-menu' role='listbox' aria-label={t('nav.language')}>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <li key={lang.code}>
                            <button
                                type='button'
                                role='option'
                                aria-selected={lang.code === i18n.language}
                                className={lang.code === i18n.language ? 'is-active' : ''}
                                onClick={() => selectLanguage(lang.code)}
                            >
                                {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSwitcher;
