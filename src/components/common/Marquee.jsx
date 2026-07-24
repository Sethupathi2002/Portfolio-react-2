import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TECH_STACK } from '../../data/techStack';
import './Marquee.css';

// Purely decorative (the same stack is already listed accessibly in the
// Skills section), so the whole strip is hidden from assistive tech.
function Marquee() {
    return (
        <div className='marquee' aria-hidden='true'>
            <div className='marquee-track'>
                {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                    <span className='marquee-item' key={`${tech.id}-${index}`}>
                        <FontAwesomeIcon icon={tech.icon} />
                        {tech.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee;
