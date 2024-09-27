<template>
  <div>
    <header-section class="mt-4">
      {{ t("join_section__title") }}
    </header-section>
    <section-join />
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: "empty"
// });
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emit = defineEmits();

const { t } = useI18n();
</script>

<style lang="postcss" scoped></style>
