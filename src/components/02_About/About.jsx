/* eslint-disable react/no-unescaped-entities */
import './About.css';
import mainImage from '../../assets/main_man_and_moon.jpg';
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
                        <h2 className='main-content-skill'>
                            <span className='main-content-skill-span'>Full Stack Developer</span>
                        </h2>
                        <p className='main-content-experience'>
                            <span className='experience-badge'>3+ Years Experience</span>
                        </p>
                        <p>
                            I am a <strong>Full Stack Developer</strong> with <strong>3+ years of experience</strong> specializing in 
                            <strong> Java (Spring Boot)</strong> and <strong>React</strong>. I build scalable web applications with 
                            expertise in both front-end and back-end development.
                        </p>
                        <p>
                            On the <strong>back-end</strong>, I work with <strong>Spring Boot, Hibernate, Microservices, and REST APIs</strong>. 
                            On the <strong>front-end</strong>, I use <strong>React, Next.js, TypeScript, and Tailwind CSS</strong> 
                            to create responsive and performant user experiences. I also have experience with 
                            <strong> Docker, Jenkins CI/CD, and AWS (EC2, S3)</strong> for cloud deployments.
                        </p>
                        <p>
                            Driven by a passion for problem-solving, I approach each project with creativity and 
                            technical precision, delivering secure, high-performance production systems aligned with 
                            business goals.
                        </p>
                        <div className='main-content-icons'>
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
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;