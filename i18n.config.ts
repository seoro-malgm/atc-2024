import ko from "@/locales/ko.json";
import en from "@/locales/en.json";
import jp from "@/locales/jp.json";
import cn from "@/locales/cn.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ko",
  messages: {
    ko,
    en,
    jp,
    cn
  }
}));
