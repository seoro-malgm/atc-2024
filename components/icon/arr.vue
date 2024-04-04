<template>
  <div id="icon-arr" :class="`bg-${color}`">
    <svg
      class="icon"
      data-name="레이어 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 202.76 200.92"
      :style="{
        transform: `rotate(${dirs[dir]})`
      }"
    >
      <polygon
        class="cls-1"
        points="153.32 51.03 102.29 0 73.79 28.51 125.07 79.79 153.32 51.03"
      />
      <polygon
        class="cls-1"
        points="182.08 79.79 125.07 79.79 0 79.79 0 120.1 126.1 120.1 73.79 172.42 102.29 200.92 174.25 128.97 183.12 120.1 202.76 100.46 182.08 79.79"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  dir: {
    type: String,
    default: "right"
  },
  color: {
    type: String,
    default: "block"
  }
});
const dirs = ref({
  right: "0deg",
  left: "180deg",
  down: "90deg",
  uo: "270deg"
});
</script>

<style lang="postcss" scoped>
.cls-1 {
  stroke-width: 0px;
}

#icon-arr {
  @apply relative p-2;
  .icon {
    @apply w-full h-auto;
  }
}
</style>
