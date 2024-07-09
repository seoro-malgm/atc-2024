<template>
  <div id="wrapper" ref="wrapper">
    <nav-global-header
      :scrollY="scrollY"
      :headerHeight="headerHeight"
      @modal-subscribe="$event => (sbuscribeModalShown = $event)"
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
      <NuxtLayout
        name="page"
        :scrollY="scrollY"
        :headerHeight="headerHeight"
        @modal-subscribe="$event => (sbuscribeModalShown = $event)"
      >
        <NuxtPage
          @modal-subscribe="$event => $emit('modal-subscribe', $event)"
        />
        <!-- <slot></slot> -->
      </NuxtLayout>
    </main>
    <nav-global-footer />

    <!-- modals -->
    <!-- 구독 모달 -->
    <modal-subscribe
      :shown="sbuscribeModalShown"
      @toggle="$event => (sbuscribeModalShown = $event)"
    />

    <!-- toast -->
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

// 구독 폼 열기
const sbuscribeModalShown = ref(false);
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
