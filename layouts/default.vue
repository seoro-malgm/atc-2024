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
import { useRoute, useRouter } from "vue-router";
import { useElementBounding } from "@vueuse/core";
const wrapper = ref();

const route = useRoute();
const router = useRouter();
const path = computed(() => {
  return route.path;
});

watch(
  () => path.value,
  (n, o) => {
    // window.scrollTo(0, 0);
    // router.
  }
);

const main = ref();
const mainBounding = useElementBounding(main);
const pinned = computed(() => {
  const { y } = mainBounding;
  return y.value >= 10;
});
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply lg:mx-4 my-2 lg:my-4 border border-grayscale-800 container;
  margin-left: auto;
  margin-right: auto;

  #main {
    @apply pt-[58px] lg:pt-[73px];
    &.pinned {
      @apply lg:pt-0;
    }
  }
}
</style>
