<template>
  <div class="py-12 min-h-screen text-center">
    <status-loading />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: "default"
});

const id = computed(() => {
  return route?.params?.id;
});

// locales store
const localeStore = useLocaleStore();
// 브라우저에 저장된 언어
const currentLocale = computed(() => {
  return localeStore.getLocale;
});

// 언어를 확인하고 라우트를 이동시킴
function initializeLocale() {
  // 저장된 언어 혹은 기본언어로 이동
  // router.push(`/${currentLocale?.value || "ko"}/home`);
  console.log("3 :", currentLocale.value);
}

onMounted(() => {
  // initializeLocale();
});
</script>

<style lang="postcss" scoped></style>
