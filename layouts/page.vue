<template>
  <div>
    <NuxtPage
      :scrollY="scrollY"
      :headerHeight="headerHeight"
      @modal-subscribe="$event => $emit('modal-subscribe', $event)"
      :lang="paramsLang"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  scrollY: {
    type: [Number, String],
    default: 0
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  }
});
import { useRoute } from "vue-router";
import { useLocaleStore } from "@/stores/locale";

// 언어 store
const localeStore = useLocaleStore();

// params에 세팅된 언어
const paramsLang = computed(() => {
  return route?.params?.lang;
});

const allLocales = computed(() => {
  return localeStore?.allLocales;
});
const route = useRoute();
// 언어를 제대로 사용하는 때가 아니면 hidden
const validate = computed(() => {
  return allLocales.value.some(l => l?.id === paramsLang?.value);
});
onMounted(() => {
  // console.log("validate : ", validate.value);
  if (!validate.value) {
    navigateTo("/ko/home");
  }
});
</script>

<style lang="postcss" scoped></style>
