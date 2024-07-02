<template>
  <div id="wrapper" ref="wrapper">
    <nav-global-header
      :scrollY="scrollY"
      :headerHeight="headerHeight"
      ref="header"
    />
    <main
      id="main"
      :class="[{ 'is-main': path === '/' }]"
      ref="main"
      :style="{
        paddingTop: `${headerHeight}px`
      }"
    >
      <NuxtLayout name="page" :scrollY="scrollY" :headerHeight="headerHeight">
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
const scrollY = computed(() => {
  const { y } = mainBounding;
  return Number(y.value) * -1;
});

const header = ref();
const headerBounding = useElementBounding(header);
const headerHeight = computed(() => {
  return headerBounding.height.value;
});
</script>

<style lang="postcss" scoped>
#wrapper {
  /* @apply; */
  margin-left: auto;
  margin-right: auto;

  #main {
    @apply pt-[58px] lg:pt-[200px];
    /* &.pinned {
      @apply lg:pt-0;
    } */
  }
}
</style>
