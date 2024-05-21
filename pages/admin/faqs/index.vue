<template>
  <div>
    this is faq 관리

    <br />
    col: {{ col }}
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
definePageMeta({
  layout: "dashboard"
});

const props = defineProps({
  col: {
    type: Object,
    default: null
  },
  addQuery: {
    type: Object,
    default: null
  }
});
</script>

<style lang="postcss" scoped></style>
