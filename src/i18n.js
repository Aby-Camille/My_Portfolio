import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInFr from './data/fr.json';
import translationsInEn from './data/en.json';
import translationsInZh from './data/zh.json';

const resources = {
    fr: {
      translation: translationsInFr
    },
    en: {
      translation: translationsInEn
    },
    zh: {
      translation: translationsInZh
    }
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources, // resources are important to load translations for the languages.
      lng: "fr", // It acts as default language. When the site loads, content is shown in this language.  
      debug: true,
      fallbackLng: "en", // use en if selected language is not available
      interpolation: {
        escapeValue: false
      },
      ns: "translation", // namespaces help to divide huge translations into multiple small files.
      defaultNS: "translation"
    });
  
  export default i18n;