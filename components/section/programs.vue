<template>
  <div>this is 프로그램 섹션</div>
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
