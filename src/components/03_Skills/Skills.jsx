import { useState } from 'react';
import './Skills.css';
import teenager_graduation from '../../assets/boy on graduation.png';

function Skills() {
    const [activeDiv, setActiveDiv] = useState('skills'); // Default to Front-End Development

    const handleDivToggle = (divName) => {
        setActiveDiv(activeDiv === divName ? '' : divName); // Toggle active section
    };

    return (
        <>
            <div className='skills-container'>
                <div className='skills-heading'>
                    <h1>Skills</h1>
                </div>
                <div className='skills-content-two-section'>
                    <div className='skills-content'>
                        <div className='skills-content-section'>
                            <div className='skills-content-skills'>
                                <h2 onClick={() => handleDivToggle('skills')}
                                    className={activeDiv === 'skills' ? 'active' : ''}
                                >
                                    Skills
                                </h2>
                                <h2 onClick={() => handleDivToggle('studies')}
                                    className={activeDiv === 'studies' ? 'active' : ''}
                                >
                                    Education
                                </h2>
                                <h2 onClick={() => handleDivToggle('soft-skills')}
                                    className={activeDiv === 'soft-skills' ? 'active' : ''}
                                >
                                    Soft Skills
                                </h2>
                            </div>

                            <div className="skills-content-details">
                                {activeDiv === 'skills' && (
                                    <div className="skill-div">
                                        <div className='skill-div-front-end'>
                                            <h3>Front-End-Development</h3>
                                            <p><span className='skills-content-skills-span'>HTML/CSS:</span> <br /> Proficiency in writing clean and semantic HTML...</p>
                                            <p><span className='skills-content-skills-span'>JavaScript:</span> <br /> Intermediate knowledge of vanilla JavaScript...</p>
                                            <p><span className='skills-content-skills-span'>Front-End Frameworks:</span> <br /> Intermediate knowledge with at least one JavaScript framework...</p>
                                        </div>
                                        <div className="skill-div-back-end">
                                            <h3>Back-End-Development</h3>
                                            <p><span className='skills-content-skills-span'>Java Programming:</span> <br /> Intermediate understanding of Java syntax...</p>
                                            <p><span className='skills-content-skills-span'>Spring Boot:</span> <br /> Experience with Spring and Spring Boot...</p>
                                            <p><span className='skills-content-skills-span'>RESTful APIs:</span> <br /> Ability to design and implement RESTful APIs...</p>
                                            <p><span className='skills-content-skills-span'>Database Management:</span> <br /> Working knowledge of SQL databases...</p>
                                        </div>
                                    </div>
                                )}

                                {activeDiv === 'studies' && (
                                    <div className="skill-div">
                                        <p><span className='skills-content-skills-span-edu'>TNK Matrculation Higher Secondary School</span> <br />
                                            <span className='skills-content-skills-span-marks'>SSLC - 86% (2017)</span></p>
                                        <p><span className='skills-content-skills-span-edu'>TNK Matrculation Higher Secondary School</span> <br />
                                            <span className='skills-content-skills-span-marks'>HSC - 72% (2019)</span></p>
                                        <p><span className='skills-content-skills-span-edu'>Velalar College of Engineering And Technology</span> <br />
                                            <span className='skills-content-skills-span-marks'>CGPA - 8.31 / 10 (2023)</span></p>
                                    </div>
                                )}

                                {activeDiv === 'soft-skills' && (
                                    <div className="skill-div">
                                        <p><span className='skills-content-skills-span'>Learning & Adaptability</span><br />
                                            Willingness to continuously learn new tools and frameworks as the tech landscape evolves.
                                        </p>
                                        <p><span className='skills-content-skills-span'>Collaboration</span> <br />
                                            Experience working in teams using tools like Slack or Microsoft Teams for communication, and GitHub for code collaboration.</p>
                                        <p><span className='skills-content-skills-span'>Communication </span> <br />
                                            Strong verbal and written communication skills, able to articulate ideas clearly and effectively.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='skills-content-png'>
                        <img src={teenager_graduation} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
