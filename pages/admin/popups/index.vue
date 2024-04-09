<template>
  <div>this is 팝업 관리</div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
definePageMeta({
  layout: "dashboard"
});

const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
</script>

<style lang="postcss" scoped></style>
