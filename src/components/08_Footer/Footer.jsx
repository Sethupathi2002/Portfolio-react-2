import './Footer.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink } from 'react-scroll';
import { SOCIAL_LINKS } from '../../data/socials';
import { SCROLL_LINK_PROPS } from '../../utils/scrollProps';

const QUICK_LINK_IDS = ['about', 'experience', 'skills', 'services', 'projects', 'contact'];

function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-brand'>
                    <ScrollLink to='about' {...SCROLL_LINK_PROPS} className='footer-logo'>
                        <span className='footer-logo-brace'>&lt;</span>
                        Sethupathi
                        <span className='footer-logo-brace'>/&gt;</span>
                    </ScrollLink>
                    <p className='footer-tagline'>{t('footer.tagline')}</p>
                </div>

                <nav className='footer-links' aria-label='Footer navigation'>
                    {QUICK_LINK_IDS.map((id) => (
                        <ScrollLink key={id} to={id} {...SCROLL_LINK_PROPS}>
                            {t(`nav.${id}`)}
                        </ScrollLink>
                    ))}
                </nav>

                <div className='footer-socials'>
                    {SOCIAL_LINKS.map((social) => (
                        <a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label}>
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    ))}
                </div>
            </div>

            <div className='footer-bottom'>
                <p>&copy; {year} Sethupathi Vijayakumar. {t('footer.rights')}</p>
                <p>{t('footer.builtWith')}</p>
            </div>
        </footer>
    );
}

export default Footer;
