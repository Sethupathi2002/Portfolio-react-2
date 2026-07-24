import {
    faReact, faJava, faPython, faDocker, faAws, faGithub, faJs,
} from '@fortawesome/free-brands-svg-icons';
import {
    faLeaf, faRocket, faDatabase, faServer, faMobileScreenButton, faCloud,
} from '@fortawesome/free-solid-svg-icons';

// Purely decorative — labels are proper nouns, no i18n needed (same convention as PROJECTS' `tech` tags).
export const TECH_STACK = [
    { id: 'react', icon: faReact, label: 'React' },
    { id: 'reactNative', icon: faMobileScreenButton, label: 'React Native' },
    { id: 'javascript', icon: faJs, label: 'JavaScript' },
    { id: 'java', icon: faJava, label: 'Java' },
    { id: 'springBoot', icon: faLeaf, label: 'Spring Boot' },
    { id: 'python', icon: faPython, label: 'Python' },
    { id: 'fastapi', icon: faRocket, label: 'FastAPI' },
    { id: 'postgresql', icon: faServer, label: 'PostgreSQL' },
    { id: 'mysql', icon: faDatabase, label: 'MySQL' },
    { id: 'docker', icon: faDocker, label: 'Docker' },
    { id: 'aws', icon: faAws, label: 'AWS' },
    { id: 'cloud', icon: faCloud, label: 'Cloud' },
    { id: 'github', icon: faGithub, label: 'GitHub' },
];
