import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import resume from '../../assets/Sethupathi_Vijayakumar_Resume.pdf';

import './Contact.css'



function Contact() {
    return (
        <div className='contact-container'>
            <div className="contact-left-side">
                <h1>Contact Me</h1>
                <div className='contact-content-text'>
                    <p><FontAwesomeIcon icon={faEnvelope} /> vjsethu2002@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +91 8248402825</p>
                </div>
                <div className='contact-content-icons'>
                    <a href="https://www.linkedin.com/in/sethupathi-vijayakumar-11848a214/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/Sethupathi2002" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.instagram.com/sethupathi2002/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://x.com/Sethupathi_2002" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <div className='contact-content-button-div'>
                    <a href={resume} download="Sethupathi_Vijayakumar_Full_Stack_Developer_Resume.pdf" className='contact-content-button'>Download CV</a>
                </div>
            </div>
            <div>
                <form action="" className='contact-form'>
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter your email" />
                    <textarea name="" id="" placeholder='Your message'></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
