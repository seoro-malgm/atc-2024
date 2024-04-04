<template>
  <div>
    <ol>
      <li>1. 스폰서 혜택 테이블</li>
      <li>2. 미팅 예약하기 폼</li>
      <li>3. 함께하는 기관들 목록</li>
      <li>4. 스폰서 목록</li>
    </ol>
    <!-- faq 먹럭 -->
    <section-faq></section-faq>
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
