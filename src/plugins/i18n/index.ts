import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "ar",
  messages: {
    en,
    ar
  },
});
