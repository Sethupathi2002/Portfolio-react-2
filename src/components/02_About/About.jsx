/* eslint-disable react/no-unescaped-entities */
import './About.css';
import mainImage from '../../assets/main_man_and_moon.jpg'; // Import your main image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function About() {
    return (
        <>
            <main>
                <div className='main-image-div'>
                    <img src={mainImage} alt="main_image" />
                </div>
                <div>
                    <div className='main-content-div'>
                        <h1 className='main-content-name'>Hi, I'm <span className='main-content-name-span'>Sethupathi</span></h1>
                        <h2 className='main-content-skill'>I'm a <span className='main-content-skill-span'>Fullstack Developer</span></h2>
                        <p>I am a dedicated full-stack developer specializing in Java, with expertise in both front-end and back-end development. My back-end experience includes working with spring, Springboot, Hibernate and Microservices to manage server-side logic and APIs, while on the front-end, I use HTML, CSS, JavaScript, and React to create responsive user experiences. Driven by a passion for problem-solving, I approach each project with creativity and technical precision.</p>
                        <div className='main-content-icons'>
                            <a href="https://www.linkedin.com/in/sethupathi-vijayakumar-11848a214/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/Sethupathi2002" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.instagram.com/sethupathi2002/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://x.com/Sethupathi_2002" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;
