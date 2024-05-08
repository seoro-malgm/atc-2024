<template>
  <div id="wrapper" ref="wrapper">
    <nav-global-header :pinned="pinned" />
    <main
      id="main"
      :class="[{ 'is-main': path === '/' }, { pinned: pinned }]"
      ref="main"
    >
      <NuxtLayout name="page">
        <NuxtPage />
        <!-- <slot></slot> -->
      </NuxtLayout>
    </main>
    <nav-global-footer />
    <UNotifications />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useElementBounding } from "@vueuse/core";
const wrapper = ref();

const route = useRoute();
// const router = useRouter();
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
  @apply lg:mx-4 my-2 lg:my-4 border border-grayscale-800;
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
