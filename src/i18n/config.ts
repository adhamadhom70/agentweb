import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';
import translationFR from './locales/fr.json';

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: true, // Set to false in production
    
    interpolation: {
      escapeValue: false // React already escapes values
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;