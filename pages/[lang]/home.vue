<template>
  <div id="index">
    <!-- 히어로 -->
    <section-hero :scrollY="scrollY" />
    <!-- <section-marquee /> -->

    <!-- 행사 소개 -->
    <section-introduction />

    <!-- 연사 -->
    <section-speakers />

    <!-- 장소섹션 -->
    <section-location />

    <!-- 소식 구독 예약하기 -->
    <!-- <section-booking-news @modal-subscribe="$emit('modal-subscribe', true)" /> -->

    <!-- 프로그램, 부대행사-->
    <!-- <section-programs /> -->

    <!-- 참여하기 -->
    <header-section class="mt-4">
      {{ $t("join_section__title") }}
    </header-section>
    <section-join />

    <!-- 스폰서 -->
    <section-sponsors />

    <!-- 공유하기 -->
    <section-share />

    <!-- faq -->
    <!-- <section-faq /> -->
  </div>
</template>

<script setup>
const props = defineProps({
  scrollY: {
    type: [Number, String],
    default: 0
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  }
});
</script>

<style lang="postcss" scoped>
#index {
  overflow-x: hidden;
}
</style>
