import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';
import ja from './locales/ja.json';

export const SUPPORTED_LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
];

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            de: { translation: de },
            ja: { translation: ja },
        },
        fallbackLng: 'en',
        supportedLngs: SUPPORTED_LANGUAGES.map((lang) => lang.code),
        load: 'languageOnly',
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'portfolio-language',
            caches: ['localStorage'],
        },
        interpolation: { escapeValue: false },
    })
    .then(() => {
        document.documentElement.setAttribute('lang', i18next.language);
    });

i18next.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
});

export default i18next;
