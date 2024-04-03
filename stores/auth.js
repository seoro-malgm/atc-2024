import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    token: null,
    currentUser: null
  }),
  getters: {
    isAuthenticated: state => !!state.token,
    currentUserInfo: state => state.currentUser
  },
  actions: {
    setToken(newToken) {
      if (process.client) {
        // 클라이언트 사이드에서만 실행
        sessionStorage.setItem("::sms::token", newToken);
        this.token = newToken;
      }
    },
    clearToken() {
      this.token = null;
      if (process.client) {
        // 클라이언트 사이드에서만 실행
        sessionStorage.removeItem("::sms::token");
      }
    },
    setUser(user) {
      this.currentUser = user[0];
      // console.log("this.currentUser :", this.currentUser);
    },
    clearUser() {
      this.currentUser = null;
      this.clearToken();
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: persistedState.sessionStorage,
        paths: ["token", "currentUser"]
      }
    ]
  }
});
