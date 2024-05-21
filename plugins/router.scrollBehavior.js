export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }
    return { x: 0, y: 0, behavior: "smooth" };
  };
});
