import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { SCROLL_LINK_PROPS } from '../../utils/scrollProps';
import './StickyHireBar.css';

const DISMISS_KEY = 'portfolio-hire-bar-dismissed';

function StickyHireBar() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(() => sessionStorage.getItem(DISMISS_KEY) === '1');

    useEffect(() => {
        if (isDismissed) return undefined;

        const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.8);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isDismissed]);

    const dismiss = () => {
        sessionStorage.setItem(DISMISS_KEY, '1');
        setIsDismissed(true);
    };

    if (isDismissed) return null;

    return (
        <div className={`sticky-hire-bar ${isVisible ? 'is-visible' : ''}`}>
            <p className='sticky-hire-bar-text'>{t('stickyHire.text')}</p>
            <div className='sticky-hire-bar-actions'>
                <ScrollLink to='contact' {...SCROLL_LINK_PROPS} className='sticky-hire-bar-cta'>
                    {t('stickyHire.cta')}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </ScrollLink>
                <button
                    type='button'
                    className='sticky-hire-bar-dismiss'
                    onClick={dismiss}
                    aria-label={t('a11y.close')}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
        </div>
    );
}

export default StickyHireBar;
