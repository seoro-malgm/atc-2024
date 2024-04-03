<template>
  <div>
    <div
      class="horizontal-scroll"
      :class="{ 'is-mobile-view': isMobileView }"
      ref="wrapper"
      :style="{}"
    >
      <!-- position: state.isSticky ? 'fixed' : 'block' -->
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
                <nuxt-img fit="cover" :src="item.src" preload />
              </figure>
            </article>
          </div>
          <section-marquee>
            <div class="marquee-images">
              <logo-symbol v-for="i in 10" :key="i" />
              <!-- <img src="/assets-0.png" v-for="i in 10" alt="" /> -->
            </div>
          </section-marquee>
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
  const length = props.items.length;
  return bodyBounds.width.value * (length - 1) + (length + 1) * 40 + 160;
});

const scrollHeight = computed(() => {
  return data;
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
          @apply my-0 lg:mr-[40px] relative lg:border-x;
          .item-description {
            @apply m-0 p-4 lg:p-8 border-t bg-white w-full lg:absolute bottom-0 z-10 lg:text-center;
            h4 {
              @apply text-lg lg:text-3xl font-bold;
            }
            p {
              @apply text-base lg:text-lg;
            }
          }
          width: 100vw;
          min-width: 100vw;
          height: auto;
          figure.item-image-wrapper {
            position: relative;
            width: 100vw;
            padding-bottom: 100vh;
            @media all and (min-width: 1024px) {
              padding-bottom: calc(100vh - 80px);

              /* max-height: calc(100vh - 80px); */
            }
            overflow: hidden;

            > img {
              /* width: auto;
              height: 100%; */
              width: 100%;
              height: auto;
              @apply w-[auto] h-full lg:w-full lg:h-[auto] object-fill;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
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
        max-height: calc(100vh - 80px);
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
          position: static;
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

.marquee-images {
  @apply flex;
  img,
  svg {
    @apply block w-[400px];
    height: auto;
  }
}
</style>
