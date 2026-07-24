import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { SOCIAL_LINKS } from '../../data/socials';
import resume from '../../assets/Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf.pdf';
import Reveal from '../common/Reveal';
import FaqAccordion from '../common/FaqAccordion';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxuyDaW7MU1HoDw7ebfTpzgiKOu6SlINVl6d7y4l38uU8aI_8-y47dc8xvMLKlSUnKu/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send form data to Google Sheets
      const params = new URLSearchParams(formData).toString();
      await fetch(`${GOOGLE_SCRIPT_URL}?${params}`, {
        method: 'POST',
        mode: 'no-cors' // Helps avoid CORS errors
      });

      setSubmitStatus({
        type: 'success',
        message: t('contact.successMessage')
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: t('contact.errorMessage')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact-columns'>
      <Reveal as='div' direction='left' className="contact-left-side">
        <p className='section-eyebrow'>{t('contact.eyebrow')}</p>
        <h1 className='contact-heading'>{t('contact.heading')}</h1>
        <p className='contact-subtitle'>{t('contact.subtitle')}</p>

        <div className='contact-content-text'>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
            <span>sethupathi.vk@gmail.com</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className='contact-icon' />
            <span>+91 8248402825</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} className='contact-icon' />
            <span>{t('contact.location')}</span>
          </p>
        </div>

        <div className='contact-content-icons'>
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href={social.href} target='_blank' rel="noopener noreferrer" aria-label={social.label}>
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        <div className='contact-content-button-div'>
          <a href={resume} download="Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf" className='contact-content-button'>
            <span>📄 {t('contact.downloadCV')}</span>
          </a>
        </div>
      </Reveal>

      <Reveal as='div' direction='right' delay={100} className='contact-form-div'>
        <form onSubmit={handleSubmit} className='contact-form'>
          <h3>{t('contact.formTitle')}</h3>

          <input
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            aria-label={t('contact.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            aria-label={t('contact.emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder={t('contact.subjectPlaceholder')}
            aria-label={t('contact.subjectPlaceholder')}
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            aria-label={t('contact.messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {submitStatus.message && (
            <div className={`form-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <button type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? t('contact.sending') : `${t('contact.sendMessage')} ✉️`}</span>
          </button>
        </form>
      </Reveal>
      </div>

      <Reveal as='div' className='contact-faq'>
        <h3 className='contact-faq-heading'>{t('faq.heading')}</h3>
        <FaqAccordion />
      </Reveal>
    </div>
  );
}

export default Contact;
