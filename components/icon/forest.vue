<template>
  <div id="icon-forest" class="icon">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M48.4366 57.9496L27 79.5661L38.9803 91.6469L60.5271 69.9193L48.4366 57.9496Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M60.5273 45.7578V69.9193V122.91H77.4672V69.4859L99.4439 91.6469L111.424 79.5661L81.1925 49.0808L77.4672 45.3243L69.2122 37.0001L60.5273 45.7578Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M48.4366 98.0929L27 119.709L38.9803 131.79L60.5271 110.063L48.4366 98.0929Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M60.5273 85.901V110.063V163.076H77.4672V109.618L99.4439 131.79L111.424 119.709L81.1925 89.2241L77.4672 85.4676L69.2122 77.1433L60.5273 85.901Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M109.022 57.9496L87.585 79.5661L99.5652 91.6469L121.112 69.9193L109.022 57.9496Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M121.111 45.7578V69.9193V122.91H138.051V69.4859L160.028 91.6469L172.008 79.5661L141.776 49.0808L138.051 45.3243L129.796 37.0001L121.111 45.7578Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M109.022 98.0929L87.585 119.709L99.5652 131.79L121.112 110.063L109.022 98.0929Z"
          class="rect"
          :class="addClass"
        />
        <path
          d="M121.111 85.901V110.063V163.076H138.051V109.618L160.028 131.79L172.008 119.709L141.776 89.2241L138.051 85.4676L129.796 77.1433L121.111 85.901Z"
          class="rect"
          :class="addClass"
        />
      </g>
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
  svg {
    @apply w-full;
  }
}
</style>
