import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "@/languages/en.json";
import translationBG from "@/languages/bg.json";
import translationDE from "@/languages/de.json";
import translationFR from "@/languages/fr.json";
import translationES from "@/languages/es.json";
import translationIT from "@/languages/it.json";

const resources = {
  en: { translation: translationEN },
  bg: { translation: translationBG },
  de: { translation: translationDE },
  fr: { translation: translationFR },
  es: { translation: translationES },
  it: { translation: translationIT },
};

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
