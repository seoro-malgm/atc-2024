// plugins/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Nuxt 3 Plugin
export default defineNuxtPlugin(nuxtApp => {
  const setupFirebase = () => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
      apiKey: config.public.apiKey,
      authDomain: config.public.authDomain,
      projectId: config.public.projectId,
      storageBucket: config.public.storageBucket,
      messagingSenderId: config.public.messagingSenderId,
      appId: config.public.appId,
      measurementId: config.public.measurementId,
      databaseURL: config.public.databaseURL
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const storage = getStorage(app); // app 인자가 누락되어 있었습니다

    return { app, db, auth, storage };
  };

  nuxtApp.provide("firebase", setupFirebase());
});
