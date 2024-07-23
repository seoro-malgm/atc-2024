<template>
  <div></div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: "empty"
});

// i18n
const localeStore = useLocaleStore();
const currentLocale = computed(() => {
  return localeStore.getLocale;
});

onMounted(() => {
  router.push(`/${currentLocale?.value ? currentLocale.value : "ko"}`);
});
</script>

<style lang="postcss" scoped></style>
