import ko from "@/locales/ko-KR.json";
import en from "@/locales/en-US.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ko",
  messages: {
    en,
    ko
  }
}));
