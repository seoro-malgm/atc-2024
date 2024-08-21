<template>
  <div>
    <div
      class="horizontal-scroll"
      :class="{ 'is-mobile-view': isMobileView }"
      ref="wrapper"
    >
      <!-- header -->
      <header
        class="scroll-header"
        :style="{
          paddingTop: `${headerHeight}px`
        }"
      >
        <div class="progress">
          <div
            class="bar"
            :style="{
              width: `${(state.scrollX / maxScroll) * 100}%`
            }"
          />
        </div>
      </header>
      <!-- wrapper -->
      <div class="horizontal-scroll-body" ref="body">
        <div class="horizontal-scroll-container" ref="container">
          <div
            class="horizontal-scroll-section"
            :style="
              isMobileView
                ? {
                    transform: `translate3d(0, 0, 0)`
                  }
                : {
                    transform: `translate3d(-${
                      maxScroll <= state.scrollX ? maxScroll : state.scrollX
                    }px, 0, 0)`
                  }
            "
            ref="scrollSection"
          >
            <article class="item" v-for="(item, index) in items" :key="index">
              <slot name="item-description">
                <div class="item-description">
                  <span class="subtitle" v-if="item.description.subtitle">
                    {{ $t(item.description.subtitle) }}
                  </span>
                  <h4>
                    {{ $t(item.description.title) }}
                  </h4>
                  <p v-if="item?.description.paragraph">
                    {{ $t(item?.description.paragraph) }}
                  </p>
                </div>
              </slot>
              <figure class="item-image-wrapper">
                <nuxt-img
                  fit="cover"
                  :src="item.src"
                  provider="storageBucket"
                  alt="item image"
                  preload
                />
              </figure>
            </article>
          </div>
          <!-- marquee -->
          <!-- <section-marquee /> -->
        </div>
      </div>
    </div>
    <!-- 스크롤 용도 -->
    <div
      class="hidden xl:block scroll-block"
      :style="{
        height: isMobileView ? 'unset' : `${maxScroll}px`
      }"
    />
  </div>
</template>
<script setup>
import { useElementBounding } from "@vueuse/core";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  }
});

// wrapper & body & container
const wrapper = ref(null);
const body = ref(null);
const container = ref(null);

// 페이지 최상단으로부터 갭이 몇인지
const topDistance = computed(() => {
  return wrapper?.value?.offsetTop;
});

// 상태
const state = reactive({
  currentScrollTop: 0,
  scrollX: 0,
  scrollY: 0,
  isSticky: false
});

// 마우스를 쓰는 환경인지 확인
const { sourceType } = useMouseInElement(wrapper);
// const wrapperBounds = useElementBounding(wrapper);

// useElementBounding을 사용하여 body와 container의 위치 및 크기 반응형 참조 생성
const bodyBounds = useElementBounding(body);
// const containerBounds = useElementBounding(container);

const maxScroll = computed(() => {
  const length = props.items.length - 1;
  const margin = 40;
  return (
    (bodyBounds.width.value + margin) * length -
    margin -
    +props.headerHeight +
    280
  );
});

// 상태업데이트
const updateStickyState = () => {
  if (!wrapper.value || !container.value) return;

  // 스티키 상태 조건 검사
  const isTop = bodyBounds.top.value <= 0; // wrapper의 상단이 뷰포트 상단에 도달하거나 넘어섰는지 확인
  state.isSticky = isTop;
};

// 실제 스크롤 이벤트 핸들링
const handleScroll = event => {
  state.currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  // 상태업데이트
  updateStickyState();
  // sticky 상태이며 스크롤할때만 실행
  if (state?.isSticky || sourceType.value === "mouse") {
    state.scrollX = state.currentScrollTop - topDistance.value;
  }
};

// 반응형 사이즈 체크를 위한 reactive 변수
const isMobileView = ref(false);

// 화면 크기가 변할 때마다 isMobileView 업데이트
const updateMobileViewStatus = () => {
  isMobileView.value = window.innerWidth <= 1280; // xl size
};
// isMobileView 값이 변경될 때마다 실행되는 watch
watch(isMobileView, n => {});

onMounted(() => {
  // 사이즈 체크
  isMobileView.value = window.innerWidth <= 1280; // xl size
  window.addEventListener("resize", updateMobileViewStatus);
  // 스크롤 이벤트
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileViewStatus);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="postcss" scoped>
.horizontal-scroll {
  @apply static xl:sticky;
  background-color: white;
  top: 0;
  /* z-index: -1; */
  overflow: hidden;
  .scroll-header {
    @apply max-xl:hidden static xl:absolute xl:top-0 max-xl:mb-6 max-xl:pt-8 pt-12 border-b border-grayscale-800 left-0 w-full z-[2] bg-white;
    .progress {
      @apply max-xl:hidden w-full h-2 relative xl:block;
      .bar {
        @apply absolute left-0 right-0 h-2 bg-green-300;
      }
    }
    /* .title {
      @apply text-center text-3xl xl:text-5xl font-bold skew-x-[-15deg] xl:pt-8;
    } */
  }

  .horizontal-scroll-body {
    position: relative;
    overflow: hidden;

    .horizontal-scroll-container {
      .horizontal-scroll-section {
        @apply flex flex-col xl:flex-row;
        /* display: flex; */
        align-items: stretch;
        flex-wrap: nowrap;

        .item {
          @apply my-0 xl:mr-[40px] relative xl:border-x border-grayscale-800 w-screen min-w-[100vw] h-auto max-xl:flex max-xl:flex-col;
          .item-description {
            @apply m-0 p-4 pb-6 xl:py-0 border-t border-grayscale-800 bg-white max-xl:w-full xl:absolute xl:right-[-1px] xl:top-1/2 xl:-translate-y-1/2 xl:w-[30vw] xl:h-full xl:flex xl:flex-col xl:items-center xl:justify-center z-10 xl:text-center xl:border-l max-xl:order-1;
            span.subtitle {
              @apply text-base xl:text-xl text-grayscale-700;
            }
            h4 {
              @apply text-2xl xl:text-4xl mb-3 max-xl:mt-8 xl:mb-6 font-bold max-xl:container px-10 max-xl:text-center;
            }
            p {
              @apply text-base xl:text-xl  text-grayscale-600 max-xl:mt-5 max-xl:container px-10 pb-4 xl:pb-0;
              line-height: 1.7;
            }
          }
          figure.item-image-wrapper {
            @apply relative w-screen pb-[100vh] overflow-hidden aspect-video object-cover;

            > img {
              /* width: auto;
              height: 100%; */

              @apply absolute-center w-full min-h-full;
              /* position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%); */
            }
          }
        }
      }
    }
  }
}

.horizontal-scroll.is-mobile-view {
  position: static;
  overflow: hidden;
  .horizontal-scroll-body {
    /* test */
    /* max-height: calc(100vh - 120px) ; */
    @apply xl:mt-[68px];
    .horizontal-scroll-section {
      @media all and (min-width: 1280px) {
        max-height: calc(100vh - 73px);
      }
      .item {
        @apply xl:mb-8 w-auto h-auto min-w-[unset] min-h-[unset] max-w-[unset] xl:min-w-[100vw];
        &:last-child {
          @apply mb-0;
        }
        .item-description {
        }

        figure.item-image-wrapper {
          width: 100%;
          overflow: visible;
          position: relative;
          padding-bottom: 0;
          > img {
            position: static;
            top: unset;
            left: unset;
            transform: translate(0, 0);
          }
        }
      }
    }
  }
}

.horizontal-scroll,
.horizontal-scroll-wrapper,
.horizontal-scroll-container,
.horizontal-scroll-section {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
