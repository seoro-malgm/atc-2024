<template>
  <div id="section-speakers">
    <div class="text-center text-xl lg:text-2xl">연사 섹션(작업예정)</div>
  </div>
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

<style lang="postcss" scoped>
#section-speakers {
  @apply pt-24 pb-48 bg-grayscale-950 border-t border-grayscale-900 text-white min-h-screen;
}
</style>
