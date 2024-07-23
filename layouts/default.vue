<template>
  <div id="wrapper" ref="wrapper">
    <nav-global-header
      :scrollY="scrollY"
      :headerHeight="headerHeight"
      @modal-subscribe="$event => (sbuscribeModalShown = $event)"
      :validate="validate"
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
          :validate="validate"
        />
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
import { useRoute } from "vue-router";
import { useLocaleStore } from "@/stores/locale";
import { useElementBounding } from "@vueuse/core";

// 언어 store
const localeStore = useLocaleStore();

// params에 세팅된 언어
const paramsLang = computed(() => {
  return route?.params?.lang;
});

const allLocales = computed(() => {
  return localeStore?.allLocales;
});

// 언어를 제대로 사용하는 때가 아니면 hidden
const validate = computed(() => {
  return allLocales.value.some(l => l?.id === paramsLang?.value);
});

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

// 현재 설정된 언어
// const lang = computed(() => {
//   return route?.params?.lang;
// });
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
