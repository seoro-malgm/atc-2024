<template>
  <div>
    <header-section class="mt-4">
      <h4>참여하기</h4>
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
</script>

<style lang="postcss" scoped></style>
