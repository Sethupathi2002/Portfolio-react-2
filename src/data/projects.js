import {
    faUtensils,
    faBriefcase,
    faCartShopping,
    faClipboardCheck,
    faHeartPulse,
    faTicket,
    // faBoxesStacked, faGraduationCap, faDumbbell, faScrewdriverWrench, faSackDollar — re-enable with the commented-out projects below.
} from '@fortawesome/free-solid-svg-icons';

// Display text (title/description/role/highlights) lives in src/i18n/locales/*.json,
// keyed by these same ids under projects.items.<id>. Tech names are proper nouns
// and stay untranslated here.
export const PROJECTS = [
    {
        id: 'myzivoke',
        tech: ['React', 'Python', 'FastAPI', 'Webhooks'],
        link: 'https://zivoke.com/app/login',
        icon: faBriefcase,
    },
    {
        id: 'auditApp',
        tech: ['React Native'],
        link: null,
        icon: faClipboardCheck,
    },
    {
        id: 'argos',
        tech: ['React', 'Spring Boot', 'PostgreSQL'],
        link: 'https://www.argos.co.uk/',
        icon: faCartShopping,
    },
    {
        id: 'foodDelivery',
        tech: ['React', 'Spring Boot', 'MySQL'],
        link: 'https://baratie07.netlify.app/',
        icon: faUtensils,
    },
    {
        id: 'healthcarePortal',
        tech: ['React', 'Redux', 'Tailwind CSS', 'Django', 'Spring Boot', 'PostgreSQL'],
        link: null,
        icon: faHeartPulse,
    },
    {
        id: 'eventManagement',
        tech: ['React', 'Redux', 'Tailwind CSS', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'Redis'],
        link: null,
        icon: faTicket,
    },
    // Only showing 6 project cards for now — rest kept here, commented out, for later.
    // {
    //     id: 'inventorySupplyChain',
    //     tech: ['React', 'Chart.js', 'Tailwind CSS', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'Redis'],
    //     link: null,
    //     icon: faBoxesStacked,
    // },
    // {
    //     id: 'lms',
    //     tech: ['React', 'Redux', 'Video.js', 'Tailwind CSS', 'Django', 'Spring Boot', 'PostgreSQL', 'Elasticsearch'],
    //     link: null,
    //     icon: faGraduationCap,
    // },
    // {
    //     id: 'fitnessTracker',
    //     tech: ['React Native', 'Expo', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'Firebase'],
    //     link: null,
    //     icon: faDumbbell,
    // },
    // {
    //     id: 'serviceBooking',
    //     tech: ['React Native', 'Expo', 'Django', 'Spring Boot', 'PostgreSQL'],
    //     link: null,
    //     icon: faScrewdriverWrench,
    // },
    // {
    //     id: 'financeBudget',
    //     tech: ['React Native', 'Expo', 'FastAPI', 'Spring Boot', 'PostgreSQL'],
    //     link: null,
    //     icon: faSackDollar,
    // },
];
