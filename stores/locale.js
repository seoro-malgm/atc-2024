import { defineStore } from "pinia";

export const useLocaleStore = defineStore("locale", {
  state: () => ({
    savedLocale: "ko",
    allLocales: [
      {
        id: "ko",
        label: "한국어"
      },
      {
        id: "en",
        label: "English"
      },
      {
        id: "jp",
        label: "日本語"
      },
      {
        id: "tw",
        label: "繁體中文"
      }
    ]
  }),
  getters: {
    getLocale: state => state.savedLocale,
    getAllLocale: state => state.allLocales
  },
  actions: {
    setLocale(locale) {
      this.savedLocale = locale;
    }
  }
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: "locale",
  //       storage: localStorage
  //     }
  //   ]
  // }
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: "locale",
  //       storage: persistedState.localStorage
  //     }
  //   ]
  // }
});
