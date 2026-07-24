import {
    faLaptopCode,
    faMobileScreenButton,
    faServer,
    faCloud,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';

// Display text (title/description/highlights) lives in src/i18n/locales/*.json,
// keyed by these same ids under services.items.<id>.
export const SERVICES = [
    { id: 'webApps', icon: faLaptopCode },
    { id: 'mobileApps', icon: faMobileScreenButton },
    { id: 'backendApi', icon: faServer },
    { id: 'cloudDevOps', icon: faCloud },
    { id: 'support', icon: faScrewdriverWrench },
];
