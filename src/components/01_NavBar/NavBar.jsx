import './NavBar.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// react scroll
import { Link as ScrollLink } from 'react-scroll'


function NavBar() {
    return (
        <nav>
            <div className='navbar-heading'>
                <p>Sethupathi</p>
            </div>
            <div className='navbar-links'>
                <div className='navbar-baricon'>
                    <FontAwesomeIcon className='navbar-baricon-bar' icon={faBars} />
                    <ul className='navbar-links-list' >
                        <li><ScrollLink to="about" className='navbar-links-list-item' offset={-100} smooth={true}>About</ScrollLink></li>
                        <li><ScrollLink to="skills" className='navbar-links-list-item' offset={-100} smooth={true}>Skills</ScrollLink></li>
                        <li><ScrollLink to="projects" className='navbar-links-list-item' offset={-100} smooth={true}>Projects</ScrollLink></li>
                        <li><ScrollLink to="contact" className='navbar-links-list-item' offset={-100} smooth={true}>Contact</ScrollLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
