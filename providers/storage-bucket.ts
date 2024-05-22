import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  const config = useRuntimeConfig();
  const baseURL = `https://firebasestorage.googleapis.com/v0/b/${config.public.storageBucket}/o/`;

  // URL 인코딩을 적용하여 '/'를 '%2F'로 변환
  const encodedSrc = src
    .split("/")
    .filter(t => t !== "")
    .join("%2F");

  return {
    url: joinURL(baseURL, encodedSrc + "?alt=media")
  };
};
