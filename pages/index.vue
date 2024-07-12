<template>
  <div>
    <!-- 히어로 -->
    <section-hero :scrollY="scrollY" />
    <!-- <section-marquee /> -->

    <!-- 행사 소개 -->
    <section-introduction />

    <!-- 연사 -->
    <section-speakers />

    <!-- 장소섹션 -->
    <section-location />

    <!-- 프로그램 -->
    <section-programs />

    <!-- 스폰서 -->
    <section-sponsors />

    <section-marquee class="block mt-12 xl:hidden" />
    <section id="section-cta" class="grid grid-cols-12" ref="target">
      <div
        class="col-span-12 xl:col-span-9 border-t border-grayscale-800 bg-blue-600"
      >
        <div class="w-full my-auto pb-2">
          <logo-symbol-large class="hidden xl:block" duration="800" />
          <div class="hidden xl:block px-6 py-8 pb-4">
            <nuxt-img
              src="/lettertype-full-eng.svg"
              provider="defaultProvider"
              alt="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
              title="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
            />
          </div>
        </div>
      </div>
      <div
        class="col-span-12 xl:col-span-3 bg-blue-600 max-xl:py-[10rem] xl:py-8"
      >
        <header class="section-header">
          <h3 class="title">
            ATC 2024 <br />
            예약 오픈 D-30
          </h3>
          <p class="desc">
            사전예약 오픈 알림을 예약하시면,
            <br />
            ATC 2024의 소식과 다양한 할인 혜택을 가장 먼저 알려드릴게요.
          </p>
        </header>

        <section class="cta max-xl:text-center">
          <button @click="$emit('modal-subscribe', true)" class="btn-cta">
            <span> 알림 예약하기 </span>
          </button>
        </section>
      </div>
    </section>
    <section-marquee class="block xl:hidden" />

    <!-- 공유하기 -->
    <section-share />

    <!-- faq -->
    <!-- <section-faq /> -->
  </div>
</template>

<script setup>
import { useMouseInElement } from "@vueuse/core";
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
#section-cta {
  /* .symbol {
    @apply absolute;
    transition: transform 0.12s ease-out;
    pointer-events: none;
    z-index: 1;
  } */
  .section-header {
    @apply text-white px-8 xl:px-14 max-xl:text-center;
    .title {
      @apply text-5xl font-extrabold mb-4;
      line-height: 1.3;
    }
  }
  section.cta {
    @apply mt-8 px-14;

    .btn-cta {
      @apply px-5 py-3 bg-green-300;
      span,
      .icon {
        @apply inline-block transition-all-default font-semibold text-xl;
      }
      .icon {
        @apply text-2xl mt-[-3px] ml-1;
      }
      &:hover {
        span {
          transform: skew(-15deg);
        }
        .icon {
          transform: translate(4px, -4px);
        }
      }
    }
  }
}
</style>
