<template>
  <div>this is festival page</div>
</template>

<script setup>
definePageMeta({
  layout: "festival"
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
