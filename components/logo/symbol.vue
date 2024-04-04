<template>
  <svg
    class="symbol"
    data-name="symbol"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1775.6 260"
  >
    <polygon
      class="bg"
      points="1685.6 86.4 1598.2 0 1179.9 0 1179.9 0 0 0 0 260 1179.9 260 1598.2 260 1685.6 173.6 1729.8 130 1685.6 86.4"
      :style="{
        fill: currentColor
      }"
    />
    <g>
      <g>
        <polygon
          class="letter"
          points="370.6 130 0 130 0 260 370.6 260 502.1 130 502.1 0 370.6 130"
        />
        <rect class="letter" x="502.1" y="130" width="131.6" height="130" />
        <polygon
          class="letter"
          points="896.9 0 806.2 89.6 765.3 130 765.3 179.1 765.3 260 896.9 260 896.9 89.6 896.9 83.7 1028.5 83.7 1028.5 0 896.9 0"
        />
        <polygon
          class="letter"
          points="1598.2 89.6 1598.2 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1598.2 260 1598.2 173 1179.6 173 1179.6 89.6 1598.2 89.6"
        />
        <rect class="letter" x="633.7" width="131.6" height="130" />
      </g>
      <polygon
        class="arrow"
        points="1729.8 0 1598.2 0 1685.6 86.4 1729.8 130 1685.6 173.6 1598.2 260 1729.8 260 1729.8 260 1775.6 260 1775.6 0 1729.8 0"
      />
    </g>
  </svg>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useInterval } from "@vueuse/core";
const { counter, reset, pause, resume } = useInterval(4000, { controls: true });
const listColors = ref(["#64ff93", "#fff7cf", "#ffcce4", "#cfdcfc"]);

const currentColor = ref("#64ff93");

watch(
  () => counter.value,
  (n, o) => {
    if (n >= listColors.value?.length) {
      reset();
      currentColor.value = listColors.value[0];
    } else {
      currentColor.value = listColors.value[n];
    }
  }
);
</script>

<style lang="postcss" scoped>
.letter {
  fill: #000;
}

.bg {
  transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.arrow {
  fill: #4f42e9;
}
</style>
