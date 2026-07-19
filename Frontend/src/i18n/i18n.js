import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const SUPPORTED_LANGUAGES = ['en', 'rw', 'fr'];
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_STORAGE_KEY = 'tc_language';

i18n
  // Lazily fetches /locales/{{lng}}/translation.json over HTTP — only the
  // language actually selected is ever downloaded, not all three upfront.
  .use(HttpBackend)
  // Detects the visitor's browser language on first visit, and remembers
  // their explicit choice afterwards.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    nonExplicitSupportedLngs: true,
    // Treat "en-US", "fr-CA" etc. as their base language so any regional
    // browser locale still maps to one of our three supported languages.
    load: 'languageOnly',

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    detection: {
      // Prefer a language the visitor already explicitly chose (stored in
      // localStorage) over browser auto-detection on every subsequent visit.
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },

    interpolation: {
      escapeValue: false, // React already escapes output
    },

    react: {
      // Suspends the component tree briefly only while a not-yet-loaded
      // language file is being fetched; instant on every subsequent switch
      // since i18next caches loaded languages in memory.
      useSuspense: true,
    },
  });

export default i18n;
