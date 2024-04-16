<template>
  <div>
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
    <section
      class="min-h-lvh flex items-center justify-center border-t border-grayscale-800"
    >
      미팅 예약하기 폼
      <ol>
        <li>회사정보(이름, 담당자명)</li>
        <li>원하는 스폰서 혜택 리스트 체크박스</li>
        <li>원하는 미팅 날짜</li>
        <li>가능한 미팅 방식(줌, 메일, 서면, 오프라인)</li>
        <li>폼 결과는 => ADMIN에서 목록으로 => ATC 이메일로 발송하도록</li>
      </ol>
    </section>

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
