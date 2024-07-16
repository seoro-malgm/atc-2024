import { defineStore } from "pinia";

export const useLocaleStore = defineStore("locale", {
  state: () => ({
    savedLocale: "ko"
  }),
  getters: {
    getLocale: state => state.savedLocale
  },
  actions: {
    setLocale(locale) {
      this.savedLocale = locale;
    }
  },
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: "locale",
  //       storage: localStorage
  //     }
  //   ]
  // }
  persist: {
    enabled: true,
    strategies: [
      {
        key: "locale",
        storage: persistedState.localStorage
      }
    ]
  }
});
