import './Projects.css';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Food Delivery Application",
            description: "Full-stack food delivery platform with real-time order tracking and payment integration.",
            tech: ["React", "Spring Boot", "MySQL"],
            link: "https://baratie07.netlify.app/",
            emoji: "🍔"
        },
        {
            id: 2,
            title: "Zivoke Client Portal",
            description: "Enterprise client portal for meetings, document sharing, and support desk operations.",
            tech: ["React", "Spring Boot", "MongoDB"],
            link: "https://zivoke.com/app/login",
            emoji: "💼"
        },
        {
            id: 3,
            title: "Argos E-Commerce Platform",
            description: "Large-scale e-commerce platform with product catalog, payments, and user authentication.",
            tech: ["React", "Spring Boot", "PostgreSQL"],
            link: "https://www.argos.co.uk/",
            emoji: "🛍️"
        }
    ];

    return (
        <div className='projects-container'>
            <div className='projects-heading'>
                <h2>Projects</h2>
            </div>
            <div className='projects-grid'>
                {projects.map((project) => (
                    <div key={project.id} className='project-card'>
                        <a href={project.link} target='_blank' rel="noreferrer" className='project-link'>
                            <div className='project-emoji'>{project.emoji}</div>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-description'>{project.description}</p>
                            <div className='project-tech'>
                                {project.tech.map((tech, index) => (
                                    <span key={index} className='tech-tag'>{tech}</span>
                                ))}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;