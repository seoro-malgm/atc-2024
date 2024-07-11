import { defineStore } from "pinia";

// 웹사이트 안에서 공통적으로 사용하는 정보들을 여기에 정리함
export const useInfos = defineStore("info", {
  state: () => ({
    info: {
      domain: "https://atcjirisan.com/",
      instagram: "https://instagram.com/",
      facebook: "https://www.facebook.com/"
    }
  }),
  getters: {
    getInfos: state => state.info
  },
  actions: {},
  persist: {
    enabled: true
    // strategies: []
  }
});
