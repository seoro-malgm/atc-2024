<template>
  <div class="ticket">
    <div
      class="col max-lg:col-span-5 col-span-6"
      :class="reverse ? 'order-2' : 'order-1'"
    >
      <slot name="body-left" />
    </div>
    <div
      class="col max-lg:col-span-4 col-span-3"
      :class="reverse ? 'order-1' : 'order-2'"
    >
      <slot name="body-right" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  maxLg: {
    type: String,
    default: "10"
  },
  lg: {
    type: String,
    default: "10"
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="postcss" scoped>
.ticket {
  @apply rounded-lg grid grid-cols-9 overflow-hidden;
  .col {
    @apply relative;
  }
}
</style>
