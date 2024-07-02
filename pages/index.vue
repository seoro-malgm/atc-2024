<template>
  <div>
    <!-- 히어로 -->
    <section-hero :scrollY="scrollY" />
    <!-- <section-marquee /> -->

    <!-- 정보 섹션 -->
    <section-infos />

    <!-- 장소섹션 -->
    <section-location />

    <!-- 지리산 정보 -->
    <section-scroll-horizontal :headerHeight="headerHeight" :items="items">
      <template #title>
        <!-- <header-section>  -->
        지리산에서의 ATC
        <!-- </header-section> -->
      </template>
    </section-scroll-horizontal>

    <!-- 연사 -->
    <section-speakers />

    <!-- 스폰서 -->
    <section-sponsors />

    <section
      id="section-cta"
      class="grid grid-cols-12 max-xl:mt-12"
      ref="target"
    >
      <div class="col-span-12 xl:col-span-8 border-t border-grayscale-800">
        <div class="w-full">
          <logo-symbol-large class="hidden xl:block" />
          <div class="hidden xl:block px-2 mt-2">
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
        class="col-span-12 xl:col-span-4 bg-purple-heart-600 max-xl:py-[10rem] xl:pt-12 xl:pb-10"
      >
        <header class="text-white px-8 xl:px-14 max-xl:text-center">
          <h3 class="text-3xl lg:text-6xl font-extrabold mb-4">
            ATC 2024 <br />
            사전예약 오픈 D-15 <br />
            알림받기
          </h3>
          <p class="desc">
            ATC의 소식을 가장 먼저 받아보세요. 알림을 예약하시면,
            <br />
            ATC 2024의 모든 소식을 가장 먼저 받아보실 수 있습니다.
          </p>
        </header>

        <section class="cta max-xl:text-center">
          <button @click.prevent="sbuscribeModalShown = true" class="btn-cta">
            <UIcon class="icon -mt-4 mr-3" name="bxs:paper-plane" />
            <span> 알림 예약하기 </span>
          </button>
        </section>
      </div>
    </section>
    <section-marquee class="block lg:hidden" />

    <!-- 공유하기 -->
    <section-share />

    <!-- modals -->
    <!-- 구독 모달 -->
    <modal-subscribe
      :shown="sbuscribeModalShown"
      @toggle="$event => (sbuscribeModalShown = $event)"
    />
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

// 구독 폼 열기
const sbuscribeModalShown = ref(false);
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
