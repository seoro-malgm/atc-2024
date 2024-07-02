<template>
  <div>
    <NuxtPage :scrollY="scrollY" :headerHeight="headerHeight" />
  </div>
</template>

<script setup>
const props = defineProps({
  scrollY: {
    type: [Number, String],
    default: 0
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  }
});
</script>

<style lang="postcss" scoped></style>
