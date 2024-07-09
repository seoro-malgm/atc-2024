<template>
  <div class="icon" id="icon-map">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 163.124V181.618H150.625V163.124H50Z" :class="addClass" />
      <path
        d="M69.585 19V38.7493L131.04 38.7493V19L69.585 19Z"
        :class="addClass"
      />
      <path
        d="M131.04 38.3825V72.3576V106.333H150.625V72.3576V38.3825H131.04Z"
        :class="addClass"
      />
      <path
        d="M89.1699 126.082V106.333H69.5849V126.082H89.1699Z"
        :class="addClass"
      />
      <path
        d="M131.04 126.082V106.333H111.455V126.082H131.04Z"
        :class="addClass"
      />
      <path
        d="M111.444 145.82V126.071H89.1591V145.82H111.444Z"
        :class="addClass"
      />
      <path
        d="M69.585 72.3576V38.3825H50V72.3576V106.333H69.585V72.3576Z"
        :class="addClass"
      />
      <path
        d="M111.94 57.4651H88.6846V81.0265H111.94V57.4651Z"
        :class="addClass"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  addClass: {
    type: String,
    default: ""
  }
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
