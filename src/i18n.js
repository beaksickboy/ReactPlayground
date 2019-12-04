import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en/index.json";
import vi from "./translations/vi/index.json";

const resources = {
  en: {
    translations: en
  },
  vi: {
    translations: vi
  }
};

export const langs = [
  { name: "vietnamese", code: "vi" },
  { name: "english", code: "en" }
];

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as key
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
