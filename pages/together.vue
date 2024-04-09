<template>
  <div>
    <!-- <section-sponsor-benefits></section-sponsor-benefits> -->
    <section-sponsor-table></section-sponsor-table>
    <section-marquee />
    <section
      class="min-h-lvh flex items-center justify-center border-t border-grayscale-800"
    >
      미팅 예약하기 폼
    </section>

    <section-marquee />
    <section
      class="min-h-lvh flex items-center justify-center border-t border-grayscale-800"
    >
      함께하는 기관 목록
    </section>
    <!-- 스폰서 -->
    <section-sponsors />
    <!-- faq 먹럭 -->
    <section-faq></section-faq>
    <section-marquee />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
</script>

<style lang="postcss" scoped></style>
