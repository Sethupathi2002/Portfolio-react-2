import { useState } from 'react';
import './Skills.css';
import teenager_graduation from '../../assets/boy on graduation.png';

function Skills() {
    const [activeDiv, setActiveDiv] = useState('frontend');

    const handleDivToggle = (divName) => {
        setActiveDiv(activeDiv === divName ? '' : divName);
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
                                <h2 
                                    onClick={() => handleDivToggle('frontend')}
                                    className={activeDiv === 'frontend' ? 'active' : ''}
                                >
                                    Frontend
                                </h2>
                                <h2 
                                    onClick={() => handleDivToggle('backend')}
                                    className={activeDiv === 'backend' ? 'active' : ''}
                                >
                                    Backend
                                </h2>
                                <h2 
                                    onClick={() => handleDivToggle('database')}
                                    className={activeDiv === 'database' ? 'active' : ''}
                                >
                                    Database
                                </h2>
                                <h2 
                                    onClick={() => handleDivToggle('cloud')}
                                    className={activeDiv === 'cloud' ? 'active' : ''}
                                >
                                    Cloud & DevOps
                                </h2>
                            </div>

                            <div className="skills-content-details">
                                {activeDiv === 'frontend' && (
                                    <div className="skill-div">
                                        <p>
                                            <span className='skills-content-skills-span'>React.js</span><br />
                                            Building responsive and component-based UIs with modern React
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Next.js</span><br />
                                            Server-side rendering, static site generation, and API routes
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>TypeScript</span><br />
                                            Type-safe JavaScript for scalable applications
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Tailwind CSS</span><br />
                                            Utility-first CSS framework for rapid UI development
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>JavaScript (ES6+)</span><br />
                                            Modern JavaScript with async/await, promises, and more
                                        </p>
                                    </div>
                                )}

                                {activeDiv === 'backend' && (
                                    <div className="skill-div">
                                        <p>
                                            <span className='skills-content-skills-span'>Java</span><br />
                                            Core Java programming with object-oriented principles
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Spring Boot</span><br />
                                            Building RESTful APIs and microservices
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Spring Security & JWT</span><br />
                                            Authentication, authorization, and secure APIs
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Hibernate & JPA</span><br />
                                            ORM for efficient database operations
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>RESTful APIs</span><br />
                                            Designing and implementing scalable APIs
                                        </p>
                                    </div>
                                )}

                                {activeDiv === 'database' && (
                                    <div className="skill-div">
                                        <p>
                                            <span className='skills-content-skills-span'>MySQL</span><br />
                                            Relational database management with optimized queries
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>PostgreSQL</span><br />
                                            Advanced relational database with JSON support
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>MongoDB</span><br />
                                            NoSQL database for flexible and scalable data storage
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Query Optimization</span><br />
                                            Indexing, caching, and performance tuning for databases
                                        </p>
                                    </div>
                                )}

                                {activeDiv === 'cloud' && (
                                    <div className="skill-div">
                                        <p>
                                            <span className='skills-content-skills-span'>Docker</span><br />
                                            Containerization for consistent and reproducible deployments
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Jenkins</span><br />
                                            CI/CD automation for streamlined delivery pipelines
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>AWS EC2</span><br />
                                            Cloud compute for scalable application hosting
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>AWS S3</span><br />
                                            Object storage for files, assets, and backups
                                        </p>
                                        <p>
                                            <span className='skills-content-skills-span'>Git & GitHub</span><br />
                                            Version control and collaborative development
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='skills-content-png'>
                        <img src={teenager_graduation} alt="Graduation" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;