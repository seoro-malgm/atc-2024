<template>
  <div>
    <section-festival></section-festival>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty"
});
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emit = defineEmits();
</script>

<style lang="postcss" scoped></style>
