import i18n from "i18next";
import {  initReactI18next } from "react-i18next";

import translationEN from '../../locales/en.json';
import translationFR from '../../locales/fr.json';

let userLanguage = 'en';
if (typeof window !== 'undefined' && window.navigator) {
    const lang: string = window.navigator.language.slice(0, 2);
    switch (lang) {
        case 'en':
            userLanguage = 'en';
            break;
        case 'fr':
            userLanguage = 'fr';
            break;
        default:
            userLanguage =  'en';
    }
}

const resources: Record<string, typeof translationEN> = {
    en: translationEN,
    fr: translationFR
}

i18n.use(initReactI18next).init({
    resources,
    lng: userLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
})
.then(() => {
    console.log('i18next initialized successfully');
})
.catch((error) => {
    console.error('i18next initialization error:', error);
});

export default i18n;