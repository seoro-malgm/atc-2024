<template>
  <div id="wrapper" ref="wrapper">
    <nav-global-header :pinned="pinned" />
    <main id="main" :class="{ 'is-main': path === '/' }" ref="main">
      <slot></slot>
    </main>
    <nav-global-footer />
    <UNotifications />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useElementBounding } from "@vueuse/core";
const wrapper = ref();

const route = useRoute();
const path = computed(() => {
  return route.path;
});

const main = ref();
const pinned = computed(() => {
  const { y } = useElementBounding(main);
  return y.value >= 10;
});
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply mx-2 lg:mx-4 my-2 lg:my-4 border;
}
</style>
