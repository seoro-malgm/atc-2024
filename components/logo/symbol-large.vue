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
        <!-- from -->
        <!-- <polygon
          class="letter-pin"
          :points="`1598.2 89.6 1598.2 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1598.2 260 1598.2 173 1179.6 173 1179.6 89.6 1598.2 89.6`"
        /> -->
        <!-- to -->
        <!-- <polygon
          class="letter-pin"
          points="1264 89.6 1264 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1264 260 1264 173 1179.6 173 1179.6 89.6 1264 89.6"
        /> -->
        <polygon class="letter-pin" :points="letterPinPoints" />

        <rect class="letter" x="633.7" width="131.6" height="130" />
      </g>
      <!-- from -->
      <!-- <polygon
        class="arrow"
        points="1395.6 0 1264 0 1351.4 86.4 1395.6 130 1351.4 173.6 1264 260 1395.6 260 1395.6 260 1775.6 260 1775.6 0 1395.6 0"
      /> -->
      <!-- to -->
      <!-- <polygon
        class="arrow"
        points="1729.8 0 1598.2 0 1685.6 86.4 1729.8 130 1685.6 173.6 1598.2 260 1729.8 260 1729.8 260 1775.6 260 1775.6 0 1729.8 0"
      /> -->
      <polygon class="arrow" :points="arrowPoints" />
    </g>
  </svg>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useInterval } from "@vueuse/core";
const { counter, reset, pause, resume } = useInterval(1000, { controls: true });
const listColors = ref(["#64ff93", "#fff7cf", "#ffcce4", "#cfdcfc"]);

const currentColor = ref("#64ff93");

const fromLetterPinPoints =
  "1264 89.6 1264 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1264 260 1264 173 1179.6 173 1179.6 89.6 1264 89.6";
const toLetterPinPoints =
  "1598.2 89.6 1598.2 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1598.2 260 1598.2 173 1179.6 173 1179.6 89.6 1598.2 89.6";

const fromArrowPoints =
  "1395.6 0 1264 0 1351.4 86.4 1395.6 130 1351.4 173.6 1264 260 1395.6 260 1395.6 260 1775.6 260 1775.6 0 1395.6 0";
const toArrowPoints =
  "1729.8 0 1598.2 0 1685.6 86.4 1729.8 130 1685.6 173.6 1598.2 260 1729.8 260 1729.8 260 1775.6 260 1775.6 0 1729.8 0";

const letterPinPoints = ref(fromLetterPinPoints);
const arrowPoints = ref(fromArrowPoints);

let animationStartTime = null;
const animationDuration = 1300;
let animationDirection = 1; // 1은 정방향, -1은 역방향

function animate(currentTime) {
  if (!animationStartTime) {
    animationStartTime = currentTime;
  }

  const elapsedTime = currentTime - animationStartTime;
  const progress = Math.min(elapsedTime / animationDuration, 1);
  const easedProgress = ease(progress);

  const from =
    animationDirection === 1 ? fromLetterPinPoints : toLetterPinPoints;
  const to = animationDirection === 1 ? toLetterPinPoints : fromLetterPinPoints;
  letterPinPoints.value = interpolatePoints(from, to, easedProgress);

  const fromArrow = animationDirection === 1 ? fromArrowPoints : toArrowPoints;
  const toArrow = animationDirection === 1 ? toArrowPoints : fromArrowPoints;
  arrowPoints.value = interpolatePoints(fromArrow, toArrow, easedProgress);

  if (progress < 1) {
    requestAnimationFrame(animate);
  } else {
    animationStartTime = null;
    animationDirection *= -1; // 방향 전환
    requestAnimationFrame(animate); // 반대 방향으로 애니메이션 실행
  }
}

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
function interpolatePoints(from, to, progress) {
  const easedProgress = ease(progress);

  const fromPoints = from.split(" ").map(parseFloat);
  const toPoints = to.split(" ").map(parseFloat);

  const interpolatedPoints = [];
  for (let i = 0; i < fromPoints.length; i++) {
    interpolatedPoints.push(
      (1 - easedProgress) * fromPoints[i] + easedProgress * toPoints[i]
    );
  }

  return interpolatedPoints.join(" ");
}
function startAnimation() {
  animationDirection = 1;
  letterPinPoints.value = fromLetterPinPoints;
  arrowPoints.value = fromArrowPoints;
  requestAnimationFrame(animate);
}

// function reverseAnimation() {
//   animationDirection = -1;
//   letterPinPoints.value = toLetterPinPoints;
//   arrowPoints.value = toArrowPoints;
//   requestAnimationFrame(animate);
// }

onMounted(() => {
  startAnimation();
  // reverseAnimation();
});

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
svg {
  @apply w-full;
}
.letter,
.letter-pin {
  fill: #000;
}

.bg {
  transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.arrow {
  fill: #4f42e9;
}
</style>
