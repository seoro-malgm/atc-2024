<template>
  <div id="icon-copy" :class="`bg-${color}`">
    <svg
      class="icon"
      data-name="레이어 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 48.8 57"
    >
      <path :class="addClass" d="M11.76,29.47v4.22h8.05v-4.22h-8.05Z" />
      <path
        :class="addClass"
        d="M27.44,29.41h-3.41l-13.64,13.64,3.41,3.41,9.41-9.41v8.11h4.22v-12.31h-.02l.03-.03v-3.41Z"
      />
      <path :class="addClass" d="M0,17.96l6.51-6.51v6.51H0Z" />
      <path :class="addClass" d="M6.51,17.96H0v32.54h6.51V17.96Z" />
      <path :class="addClass" d="M9.76,17.96v-6.51h-3.25v6.51h3.25Z" />
      <path :class="addClass" d="M6.51,57l-6.51-6.51h6.51v6.51Z" />
      <path :class="addClass" d="M32.54,50.49l-6.51,6.51v-6.51h6.51Z" />
      <path :class="addClass" d="M6.38,50.49v6.51h19.65v-6.51H6.38Z" />
      <path :class="addClass" d="M13.14,6.51L19.65,0v6.51h-6.51Z" />
      <path :class="addClass" d="M19.65,6.51h-6.51v21.21h6.51V6.51Z" />
      <path :class="addClass" d="M48.8,16.27h-6.51v22.77h6.51v-22.77Z" />
      <path :class="addClass" d="M32.53,6.51V0h-12.88v6.51h12.88Z" />
      <path :class="addClass" d="M32.54,0l16.26,16.27h-16.26V0Z" />
      <path :class="addClass" d="M48.8,39.04l-6.51,6.51v-6.51h6.51Z" />
      <path :class="addClass" d="M29.28,39.04v6.51h13.01v-6.51h-13.01Z" />
      <path :class="addClass" d="M32.54,47.24h-6.51v3.25h6.51v-3.25Z" />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  dir: {
    type: String,
    default: "right"
  },
  color: {
    type: String,
    default: "transparent"
  },
  addClass: {
    type: String,
    default: ""
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
.icon {
  @apply w-full h-auto;
  svg {
    @apply w-full h-auto;
  }
}
</style>
