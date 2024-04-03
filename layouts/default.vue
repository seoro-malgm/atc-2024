<template>
  <div id="wrapper" ref="wrapper">
    <nav-global-header :pinned="pinned" />
    <main
      id="main"
      :class="[{ 'is-main': path === '/' }, { pinned: pinned }]"
      ref="main"
    >
      <slot></slot>
    </main>
    <nav-global-footer />
    <UNotifications />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useElementBounding } from "@vueuse/core";
const wrapper = ref();

const route = useRoute();
const path = computed(() => {
  return route.path;
});

const main = ref();
const mainBounding = useElementBounding(main);
const pinned = computed(() => {
  const { y } = mainBounding;
  return y.value >= 10;
});
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply mx-2 lg:mx-4 my-2 lg:my-4 border;

  #main {
    @apply pt-[52px] lg:pt-[56px];
    &.pinned {
      @apply lg:pt-0;
    }
  }
}
</style>
