<template>
  <div>
    this is festival layout
    <nuxt-page />
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emit = defineEmits();
</script>

<style lang="postcss" scoped></style>
