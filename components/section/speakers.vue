<template>
  <div id="section-speakers">this is 연사 섹션</div>
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
