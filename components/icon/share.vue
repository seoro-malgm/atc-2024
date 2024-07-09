<template>
  <div id="icon-share" :class="`bg-${color}`">
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 42.92 57"
    >
      <path
        :class="addClass"
        d="M6.6,15.16l4.06,4.06,7.75-7.75-4.06-4.06-7.75,7.75Z"
      />
      <path
        :class="addClass"
        d="M21.64,0l-3.28,3.28v35.94h6.57V11.42l7.81,7.81,4.06-4.06L24.95,3.31l-.02.02v-.05l-3.28-3.28Z"
      />
      <path :class="addClass" d="M36.01,22.48h-8.56v6.9h8.56v-6.9Z" />
      <path :class="addClass" d="M36.01,29.52v20.57h6.9v-20.57h-6.9Z" />
      <path :class="addClass" d="M0,29.52v20.57h6.9v-20.57H0Z" />
      <path :class="addClass" d="M15.6,22.48H6.9v6.9h8.7v-6.9Z" />
      <path :class="addClass" d="M36.04,50.1H6.9v6.9h29.13v-6.9Z" />
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
