<template>
  <header class="border-t" :class="headerClass">
    <h4>
      <slot></slot>
    </h4>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  headerClass: {
    type: String,
    default: null
  }
});
</script>

<style lang="postcss" scoped>
header {
  @apply text-center py-4;
  h4 {
    @apply font-bold text-xl lg:text-4xl;
    font-style: italic;
  }
}
</style>
