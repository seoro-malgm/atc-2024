<template>
  <div id="icon-addr" :class="`bg-${color}`">
    <svg
      class="icon"
      data-name="레이어 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 41.73 52"
      :style="{
        transform: `rotate(${dirs[dir]})`
      }"
    >
      <path :class="addClass" d="M8.12,0v8.1h25.48V0H8.12Z" />
      <path :class="addClass" d="M33.61,7.95v27.85h8.12V7.95h-8.12Z" />
      <path :class="addClass" d="M16.25,43.9v-8.1h-8.12v8.1h8.12Z" />
      <path :class="addClass" d="M33.61,43.9v-8.1h-8.12v8.1h8.12Z" />
      <path :class="addClass" d="M25.48,52v-8.1h-9.24v8.1h9.24Z" />
      <path :class="addClass" d="M8.12,21.88V7.95H0v27.85h8.12v-13.93Z" />
      <path :class="addClass" d="M25.69,15.78h-9.64v9.66h9.64v-9.66Z" />
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
