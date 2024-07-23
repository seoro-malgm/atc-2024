<template>
  <div class="py-12 min-h-screen text-center">
    <status-loading />
    [id]: {{ id }}
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
// 모든 언어
const allLocales = computed(() => {
  return localeStore.getAllLocale;
});
// 브라우저에 저장된 언어
const currentLocale = computed(() => {
  return localeStore.getLocale;
});

// 언어를 확인하고 라우트를 이동시킴
function initializeLocale() {
  for (let index = 0; index < allLocales.value.length; index++) {
    const key = allLocales.value[index].id;
    if (key === id.value) {
      router.push(`/${key}/home`);
    } else {
      router.push(`/${currentLocale?.value || "ko"}/home`);
    }
  }
}

onMounted(() => {
  initializeLocale();
});
</script>

<style lang="postcss" scoped></style>
