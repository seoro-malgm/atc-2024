<template>
  <div id="icon-info" :class="`bg-${color}`">
    <svg
      data-name="layer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 194.58 204.8"
    >
      <g>
        <polygon
          class="cls-1"
          points="77.21 123.62 116.17 162.58 116.17 123.62 157.96 123.62 157.96 47.19 36.62 47.19 36.62 123.62 77.21 123.62"
        />
        <rect class="cls-2" x="36.62" y="123.62" width="40.59" height="40.59" />
        <polygon
          class="cls-2"
          points="116.17 162.58 77.21 123.62 77.21 164.21 117.79 204.8 117.79 164.21 116.17 164.21 116.17 162.58"
        />
        <polygon
          class="cls-2"
          points="116.17 123.62 116.17 162.58 117.79 164.21 157.96 164.21 157.96 123.62 116.17 123.62"
        />
        <polygon
          class="cls-2"
          points="116.17 164.21 117.79 164.21 116.17 162.58 116.17 164.21"
        />
        <rect class="cls-2" x="36.62" width="121.34" height="38.22" />
        <rect class="cls-2" x="157.96" y="38.22" width="36.62" height="85.41" />
        <polygon
          class="cls-2"
          points="36.62 123.62 36.62 38.22 0 38.22 0 123.62 13.4 123.62 36.62 123.62"
        />
      </g>
      <rect class="cls-2" x="86.32" y="57.5" width="22" height="54.31" />
      <path
        class="cls-3"
        d="M97.32,27.22h0c-6.08,0-11,4.93-11,11h22c0-6.08-4.93-11-11-11Z"
      />
      <path
        class="cls-2"
        d="M97.32,49.22h0c6.08,0,11-4.93,11-11h-22c0,6.08,4.93,11,11,11Z"
      />
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
  fill: none;
}

.cls-1,
.cls-2,
.cls-3 {
  stroke-width: 0px;
}

.cls-2 {
  fill: #000;
}

.cls-3 {
  fill: #fff;
}

#arr-info {
  @apply relative p-2;
  .icon {
    @apply w-full h-auto;
  }
}
</style>
