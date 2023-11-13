// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./en/translation.json";

i18n.use(initReactI18next).init({
  resources: translations ,
  fallbackLng: "en", // The default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
