import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en/index.json";
import ja from "./translations/ja/index.json";

const resources = {
  en: {
    translations: en
  },
  ja: {
    translations: ja
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as key
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
