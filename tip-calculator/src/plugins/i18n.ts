import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import bg from "@/languages/bg.json";

const resources: Resource = {
  bg: {
    translation: bg,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "bg",
    fallbackLng: "bg",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
