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
        <h2 class="title">
          <slot name="title" />
        </h2>
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
                  <h4>
                    {{ item.description.title }}
                  </h4>
                  <p v-if="item?.description.paragraph">
                    {{ item?.description.paragraph }}
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
          <section-marquee />
        </div>
      </div>
    </div>
    <!-- 스크롤 용도 -->
    <div
      class="hidden lg:block scroll-block"
      :style="{
        height: isMobileView ? 'unset' : `${maxScroll}px`
      }"
    />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
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
const wrapperBounds = useElementBounding(wrapper);

// useElementBounding을 사용하여 body와 container의 위치 및 크기 반응형 참조 생성
const bodyBounds = useElementBounding(body);
const containerBounds = useElementBounding(container);

const maxScroll = computed(() => {
  const length = props.items.length - 1;
  const margin = 40;
  const gnbHeight = 78;
  return (bodyBounds.width.value + margin) * length - margin - gnbHeight;
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
  isMobileView.value = window.innerWidth <= 1024; // lg size
};
// isMobileView 값이 변경될 때마다 실행되는 watch
watch(isMobileView, n => {});

onMounted(() => {
  // 사이즈 체크
  isMobileView.value = window.innerWidth <= 1024; // lg size
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
  @apply static lg:sticky;
  background-color: white;
  top: 0;
  /* z-index: -1; */
  overflow: hidden;
  .scroll-header {
    @apply static lg:absolute lg:top-0 max-lg:mb-6 max-lg:pt-8 pb-8 border-b border-grayscale-800 left-0 w-full z-[2] bg-white;
    .progress {
      @apply max-lg:hidden w-full h-2 relative bg-white lg:block;
      .bar {
        @apply absolute left-0 right-0 h-2 bg-spring-green-300;
      }
    }
    h2.title {
      @apply text-center text-3xl lg:text-5xl font-bold skew-x-[-15deg] lg:pt-8;
    }
  }

  .horizontal-scroll-body {
    position: relative;
    overflow: hidden;

    .horizontal-scroll-container {
      .horizontal-scroll-section {
        @apply flex flex-col lg:flex-row;
        /* display: flex; */
        align-items: stretch;
        flex-wrap: nowrap;

        .item {
          @apply my-0 lg:mr-[40px] relative lg:border-x border-grayscale-800;
          .item-description {
            @apply m-0 p-4 pb-6 border-t border-grayscale-800 bg-white w-full lg:absolute bottom-0 z-10 lg:text-center;
            h4 {
              @apply text-xl lg:text-2xl mb-1 font-bold;
            }
            p {
              @apply text-base lg:text-lg text-grayscale-600;
            }
          }
          width: 100vw;
          min-width: 100vw;
          height: auto;
          figure.item-image-wrapper {
            @apply border-grayscale-800 lg:border-x;
            position: relative;
            width: 100vw;
            padding-bottom: 100vh;
            @media all and (min-width: 1024px) {
              padding-bottom: calc(100vh - 73px); /** marquee 높이 제거 */

              /* max-height: calc(100vh - 73px); */
            }
            overflow: hidden;

            > img {
              /* width: auto;
              height: 100%; */

              @apply max-lg:w-full w-[auto] h-full lg:w-full lg:h-[auto] absolute-center;
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
    @apply lg:mt-[68px];
    .horizontal-scroll-section {
      @media all and (min-width: 1024px) {
        max-height: calc(100vh - 73px);
      }
      .item {
        @apply mb-8;
        width: auto;
        height: auto;
        min-width: unset;
        min-height: unset;
        max-width: unset;
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
