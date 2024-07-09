<template>
  <!-- ATC 정보 -->
  <div class="section-infos" ref="target">
    <header class="header-infos">
      <h1>걷기로 실현되어야 할 미래</h1>
      <p>Asia Trails Conference 2024 in JRISAN</p>
    </header>
    <div class="content-wrap">
      <!-- 날짜 및 시간 -->
      <div class="date">2024.10.25 - 10:00 ~ 20:00</div>
      <!-- 주관, 주최 -->
      <ul class="list-sponsors">
        <li v-for="(item, i) in sponsors" :key="i">
          <div class="logo">
            {{ item }}
          </div>
        </li>
      </ul>
    </div>

    <!-- 로고 배경영역 -->
    <logo-symbol-text
      class="symbol -top-6 -left-6 w-[70vw] lg:w-[45vw]"
      add-class="fill-white opacity-20"
      :style="
        mousePosition.isOutside
          ? {}
          : {
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.03
              }px)`
            }
      "
    />
    <logo-symbol-arr
      class="symbol -right-2 -bottom-2 w-[55vw] lg:w-[20vw]"
      add-class="fill-white opacity-20"
      :style="
        mousePosition.isOutside
          ? {}
          : {
              transform: `translate(${-mousePosition.x * 0.02}px, ${
                -mousePosition.y * 0.03
              }px)`
            }
      "
    />
    <!-- mousePosition: {{ mousePosition.x * 0.3 }} -->
  </div>
</template>

<script setup>
import { useMouseInElement } from "@vueuse/core";
// import sponsors from "@/data/sponsorList";

// const props = defineProps({
//   data: {
//     type: String,
//     default: null
//   }
// });
const sponsors = ref([
  "ATN",
  "사단법인 숲길",
  "산림청",
  "지리산권관광개발조합"
]);
const target = ref();
const { elementX, elementY, isOutside } = useMouseInElement(target);
const mousePosition = computed(() => {
  return {
    isOutside: isOutside.value,
    x: elementX.value,
    y: elementY.value
  };
});
</script>

<style lang="postcss" scoped>
.section-infos {
  @apply bg-blue-600 text-white py-12 relative overflow-hidden px-4;
  .header-infos {
    @apply lg:py-8 px-8 text-center;
    h1 {
      @apply text-3xl xl:text-5xl font-bold;
      strong {
        @apply font-bold;
      }
    }
    p {
      @apply text-lg xl:text-2xl;
    }
  }
  .content-wrap {
    @apply max-xl:pb-14 p-6 xl:p-8 border border-green-500;
  }
}
*::selection {
  background-color: #292929 !important;
}

.symbol {
  @apply absolute;
  transition: transform 0.12s ease-out;
  pointer-events: none;
}
</style>
