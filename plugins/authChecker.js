import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "@/stores/auth";

export default defineNuxtPlugin(nuxtApp => {
  const { $firebase } = useNuxtApp();
  const { auth } = $firebase;
  const authStore = useAuth();
  onAuthStateChanged(auth, user => {
    if (user?.providerData) {
      // 사용자가 로그인한 상태
      authStore.setUser(user.providerData);
    } else {
      // 사용자가 로그아웃한 상태
      authStore.clearUser();
    }
  });
});
