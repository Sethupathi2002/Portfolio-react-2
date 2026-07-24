import {
    faReact, faJava, faDocker, faAws, faJs, faJenkins, faGithub, faPython,
} from '@fortawesome/free-brands-svg-icons';
import {
    faLayerGroup, faWind, faLeaf, faShieldHalved, faCubes, faGears, faRocket, faMobileScreenButton,
    faDatabase, faServer, faBoxesStacked, faMagnifyingGlassChart, faCloud,
    faShareNodes, faFileCode, faTowerBroadcast, faLink,
} from '@fortawesome/free-solid-svg-icons';

// Display text (name/description/category label) lives in src/i18n/locales/*.json,
// keyed by these same ids under skills.categories.<categoryId>.items.<skillId>.
export const SKILL_CATEGORIES = [
    {
        id: 'frontend',
        skills: [
            { id: 'react', icon: faReact, level: 92 },
            { id: 'reactNative', icon: faMobileScreenButton, level: 75 },
            { id: 'nextjs', icon: faLayerGroup, level: 80 },
            { id: 'typescript', icon: faJs, level: 78 },
            { id: 'tailwind', icon: faWind, level: 85 },
            { id: 'javascript', icon: faJs, level: 90 },
        ],
    },
    {
        id: 'backend',
        skills: [
            { id: 'java', icon: faJava, level: 90 },
            { id: 'springBoot', icon: faLeaf, level: 92 },
            { id: 'python', icon: faPython, level: 78 },
            { id: 'fastapi', icon: faRocket, level: 75 },
            { id: 'springSecurity', icon: faShieldHalved, level: 82 },
            { id: 'hibernate', icon: faCubes, level: 85 },
        ],
    },
    {
        id: 'apis',
        skills: [
            { id: 'restApi', icon: faGears, level: 90 },
            { id: 'graphql', icon: faShareNodes, level: 76 },
            { id: 'websockets', icon: faTowerBroadcast, level: 78 },
            { id: 'webhooks', icon: faLink, level: 80 },
            { id: 'soap', icon: faFileCode, level: 65 },
        ],
    },
    {
        id: 'database',
        skills: [
            { id: 'mysql', icon: faDatabase, level: 88 },
            { id: 'postgresql', icon: faServer, level: 80 },
            { id: 'mongodb', icon: faBoxesStacked, level: 78 },
            { id: 'queryOptimization', icon: faMagnifyingGlassChart, level: 82 },
        ],
    },
    {
        id: 'cloud',
        skills: [
            { id: 'docker', icon: faDocker, level: 82 },
            { id: 'jenkins', icon: faJenkins, level: 78 },
            { id: 'awsEc2', icon: faAws, level: 80 },
            { id: 'awsS3', icon: faCloud, level: 80 },
            { id: 'gitGithub', icon: faGithub, level: 92 },
        ],
    },
];
