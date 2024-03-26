<template>
  <svg
    id="_레이어_1"
    data-name="레이어 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1140.95 390.39"
  >
    <!-- 배경 -->
    <rect
      class="bg"
      x="0"
      y="0"
      width="1140.95"
      height="242.53"
      :style="{
        fill: currentColor
      }"
    />
    <!-- 오른쪽 끝 핀 -->
    <g>
      <polygon
        class="right-pin"
        points="1019.68 0 1100.3 80.61 1140.95 121.27 1140.95 0 1019.68 0"
      />
      <polygon
        class="right-pin"
        points="1019.68 242.53 1140.95 242.53 1140.95 121.27 1100.3 161.92 1019.68 242.53"
      />
    </g>

    <!-- 글자 -->
    <g class="letter-group">
      <polygon
        class="letter"
        points="121.27 121.27 0 121.27 0 242.53 121.27 242.53 242.53 121.27 242.53 0 121.27 121.27"
      />
      <rect
        class="letter"
        x="242.53"
        y="121.27"
        width="121.27"
        height="121.27"
      />
      <polygon
        class="letter"
        points="606.35 0 522.79 83.56 485.08 121.27 485.08 167.11 485.08 242.53 606.35 242.53 606.35 83.56 606.35 78.07 727.61 78.07 727.61 0 606.35 0"
      />
      <polygon
        class="letter"
        points="1018.75 83.56 1018.75 0 802.89 0 802.89 0 727.61 78.07 727.61 110.38 727.61 161.41 771.74 161.41 866.89 161.41 866.89 242.53 1018.75 242.53 1018.75 161.41 866.89 161.41 866.89 83.56 1018.75 83.56"
      />
      <rect class="letter" x="363.81" y="0" width="121.27" height="121.27" />
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

.right-pin {
  fill: #4f42e9;
}
</style>
