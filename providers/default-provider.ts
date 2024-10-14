import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";
import { createOperationsGenerator } from "#image";

const operationsGenerator = createOperationsGenerator();

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  const config = useRuntimeConfig();
  const baseURL: any = config.public.siteURL;

  const operations = operationsGenerator(modifiers);

  return {
    url: joinURL(baseURL, src + (operations ? "?" + operations : ""))
  };
};
