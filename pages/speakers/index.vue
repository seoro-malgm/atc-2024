<template>
  <div class="min-h-screen">this is 연사페이지</div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emits = defineEmits();
</script>

<style lang="postcss" scoped></style>
