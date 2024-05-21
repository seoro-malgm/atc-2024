<template>
  <div id="subcribe" class="">
    <section-subscribe-form />
  </div>
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

<style lang="postcss" scoped>
#subcribe {
  @apply border-b;
  margin-top: -1px;
}
</style>
