import './Projects.css';
import homePageImage from '../../assets/home_page_image.png';

function Projects() {
    return (
        <div className='projects-container'>
            <h2>Projects</h2>
            <div className='project-content'>
                <a href="https://baratie07.netlify.app/" target='_blank' rel="noreferrer">
                    <img src={homePageImage} className='home-page-image' alt="Placeholder" />
                </a>
                <h3 className='project-heading-title'>Food Delivery Application</h3>
            </div>
        </div>
    )
}

export default Projects;
