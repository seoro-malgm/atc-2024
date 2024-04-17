<template>
  <div>
    <div class="py-40">스폰서에 참여하세요 !!</div>
    <section-sponsor-benefits class="-mt-[1px]"></section-sponsor-benefits>
    <!-- 혜택 내용 및 폼 유도 -->
    <!-- <section-sponsor-table /> -->
    <!-- <div>
      <ol>
        <li>혜택목록</li>
        <li>테이블에서 1열에 해당하는 목록만</li>
        <li>혜택을 가지로 "어그로"를 끌도록 해야함</li>
      </ol>
    </div> -->
    <section-marquee />
    <header-section> 스폰서 미팅 예약 </header-section>
    <section id="section-meeing-form"></section>

    <section-marquee />
    <!-- <section
      class="min-h-lvh flex items-center justify-center border-t border-grayscale-800"
    >
      함께하는 기관 목록
    </section> -->
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
