<template>
  <svg
    id="_레이어_1"
    data-name="레이어 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 767 164.76"
  >
    <defs></defs>
    <path
      class="cls-1"
      d="M405.48,0l-56.58,56.76-25.54,25.62v82.38h82.11V53.03h82.11V0h-82.11Z"
    />
    <path class="cls-1" d="M581.91,109.64v55.11h102.82v-55.11h-102.82Z" />
    <path
      class="cls-1"
      d="M684.73,0h-146.16l-50.97,53.03v56.61h94.31v-52.88h102.82V0Z"
    />
    <path
      class="cls-1"
      d="M766.84,0h-82.11l54.59,54.76,23.08,23.16,4.44,4.46-4.45,4.46-23.07,23.15-54.59,54.77h82.27V0h-.16Z"
    />
    <path
      class="cls-2"
      :style="{
        fill: listColors[counter % listColors.length],
        transition: `fill ${1 / listColors.length}s`
      }"
      d="M762.4,77.92l-23.08-23.16L684.73,0v56.76h-102.82v52.88h102.82v55.11l54.59-54.77,23.07-23.15,4.29-4.46-4.28-4.46Z"
    />
    <path
      class="cls-1"
      d="M241.27,0v82.38h-76.41V0l-82.11,82.38H0v82.38h82.74l78.81-79.08v79.08h82.11v-82.38h79.7V0h-82.1Z"
    />
  </svg>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useInterval } from "@vueuse/core";
const { counter, reset, pause, resume } = useInterval(1430, { controls: true });
const listColors = ref(["#a5fea3", "#FFCCE4", "#FFF7CF", "#CFDCFC"]);
</script>

<style>
.cls-1 {
  fill: #000;
}

.cls-1,
.cls-2 {
  stroke-width: 0px;
}

.cls-2 {
  fill: #a5fea3;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>
