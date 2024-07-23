import ko from "@/locales/ko.json";
import en from "@/locales/en.json";
import jp from "@/locales/jp.json";
import tw from "@/locales/tw.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ko",
  messages: {
    ko,
    en,
    jp,
    tw
  }
}));
