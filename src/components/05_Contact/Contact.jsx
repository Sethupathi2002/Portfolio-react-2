import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import resume from '../../assets/Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf.pdf';
import './Contact.css';

function Contact() {
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
        message: '✅ Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: '❌ Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='contact-container'>
      <div className="contact-left-side">
        <h1>Let&rsquo;s Connect</h1>
        <p className='contact-subtitle'>Feel free to reach out for collaborations or just a friendly hello</p>
        
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
            <span>Erode, Tamil Nadu, India</span>
          </p>
        </div>

        <div className='contact-content-icons'>
          <a href="https://www.linkedin.com/in/sethupathi-vijayakumar-11848a214/" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Sethupathi2002" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/sethupathi2002/" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/Sethupathi_2002" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <div className='contact-content-button-div'>
          <a href={resume} download="Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf" className='contact-content-button'>
            <span>📄 Download CV</span>
          </a>
        </div>
      </div>

      <div className='contact-form-div'>
        <form onSubmit={handleSubmit} className='contact-form'>
          <h3>Send a Message</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
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
            <span>{isSubmitting ? 'Sending...' : 'Send Message ✉️'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;