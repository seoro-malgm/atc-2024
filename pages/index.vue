<template>
  <div>
    <!-- 히어로 -->
    <section-hero />
    <section-marquee />

    <!-- 정보 섹션 -->
    <section-infos></section-infos>
    <!-- marquee -->

    <!-- 지리산 정보 -->
    <section-scroll-horizontal :items="items">
      <template #title>
        <!-- <header-section>  -->
        지리산에서의 ATC
        <!-- </header-section> -->
      </template>
    </section-scroll-horizontal>
    <!-- 컨퍼런스 -->
    <!-- <section-conference /> -->
    <!-- 워킹 페스티벌 -->
    <!-- <section-festival /> -->
    <section-subscribe />
    <section-marquee />
    <!-- 참여 -->
    <!-- <section-subscribe-form /> -->

    <!-- 스폰서 -->
    <section-sponsors />
    <!-- 스폰서 혜택 -->
    <section-sponsor-benefits />
    <!-- <section
      id="section-cta"
      class="py-24 bg-purple-heart-500 relative overflow-hidden"
      ref="target"
    >
      <div class="relative z-[2]">
        <header class="text-center text-white px-8">
          <h3 class="text-center text-2xl lg:text-4xl font-extrabold mb-2">
            ATC의 정식 스폰서가 되어주세요.
          </h3>
          <p class="desc">
            ATC의 스폰서는 미팅을 통해 결정하여, <br />
            원하는 서비스를 제공받으실 수 있습니다.
          </p>
        </header>

        <section class="cta">
          <nuxt-link to="/together#section-meeing-form" class="btn-cta">
            <span> 미팅 예약하기 </span>
            <UIcon class="icon -mt-4" name="bxs:paper-plane" />
          </nuxt-link>
        </section>
      </div>

      <logo-symbol-text
        class="symbol top-0 left-0 w-[70vw] lg:w-[50vw]"
        add-class="fill-white opacity-20"
        :style="
          mousePosition.isOutside
            ? {
                transform: 'translate(-25%, 0)'
              }
            : {
                transform: `translate(${-50 + mousePosition.x * 0.02}%, ${
                  -50 + mousePosition.y * 0.2
                }%)`
              }
        "
      />
      <logo-symbol-arr
        class="symbol right-0 bottom-0 w-[80vw] lg:w-[30vw]"
        add-class="fill-white opacity-20"
        :style="
          mousePosition.isOutside
            ? {
                transform: 'translate(25%, 0)'
              }
            : {
                transform: `translate(${0 - mousePosition.x * 0.004}%, ${
                  -50 + mousePosition.y * 0.2
                }%)`
              }
        "
      />
    </section> -->
    <section
      id="section-cta"
      class="grid grid-cols-12 max-xl:mt-12"
      ref="target"
    >
      <div class="col-span-12 xl:col-span-8 border-t border-grayscale-800">
        <div class="w-full">
          <logo-symbol-large class="hidden xl:block" />
          <nuxt-img
            class="hidden xl:block"
            src="/lettertype-full-eng.svg"
            alt="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
            title="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
          />
        </div>
        <!-- <section-marquee class="mt-16" /> -->
        <section-marquee class="xl:mt-16" />
      </div>
      <div
        class="col-span-12 xl:col-span-4 bg-purple-heart-600 max-xl:py-[10rem] xl:pt-12 xl:pb-10"
      >
        <header class="text-white px-8 xl:px-14 max-xl:text-center">
          <h3 class="text-3xl lg:text-6xl font-extrabold mb-4">
            ATC의 <br />
            정식 스폰서가 <br />
            되어주세요.
          </h3>
          <p class="desc">
            ATC의 스폰서는 미팅을 통해 결정하여, <br />
            원하는 서비스를 제공받으실 수 있습니다.
          </p>
        </header>

        <section class="cta max-xl:text-center">
          <nuxt-link to="/together#section-meeing-form" class="btn-cta">
            <span> 미팅 예약하기 </span>
            <UIcon class="icon -mt-4" name="bxs:paper-plane" />
          </nuxt-link>
        </section>
      </div>
    </section>
    <section-marquee class="block lg:hidden" />
    <!-- faq -->
    <section-faq class="-mb-[1px]" />
    <!-- marquee -->
    <!-- <section-marquee /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const items = ref([
  {
    src: "dummy.png",
    description: {
      title: "지리산이 속삭이는생명, 평화, 공존의 메세지"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "대한민국 최초·최대 국립공원",
      paragraph:
        "1967년 대한민국 1호 국립공원 지정 총 면적 483km² 대한민국 최대 국립공원 (여의도 면적의 57.5배)"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "우리나라 최다 생물종 서식지",
      paragraph:
        "국내 국립공원 중 최다 생물종(8,869종) 서식지 반달곰 등 멸종위기 129종 서식지(2023년)"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "우리나라 최초 도보여행 순례길",
      paragraph:
        "2007년 대한민국 최초 장거리 도보여행 순례길 조성 / 2021년 대한민국 1호 국가숲길 지정"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "우리나라 최대 트래킹 성지",
      paragraph:
        "지리산둘레길 이용객수 616만명 (2023년 누적) / 총 길이 289.4km 순례자(완주자) 2,988명 (2023년 누적)"
    }
  }
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
#section-cta {
  /* .symbol {
    @apply absolute;
    transition: transform 0.12s ease-out;
    pointer-events: none;
    z-index: 1;
  } */
  section.cta {
    @apply mt-8 px-14;
    .btn-cta {
      @apply px-5 py-3 bg-spring-green-300;
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
