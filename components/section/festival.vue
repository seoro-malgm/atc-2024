<template>
  <section class="section-festival border-b-0">
    <header-section> WALKING FESTIVAL </header-section>
    <div class="border-t min-h-svh">...</div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
</script>

<style lang="postcss" scoped></style>
