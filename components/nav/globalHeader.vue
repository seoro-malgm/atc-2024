<template>
  <header
    class="global-header"
    ref="gnb"
    :class="{
      pinned: pinned
    }"
  >
    <!-- 상단, 정보 영역 -->
    <div class="global-header-top">
      <!-- 로고 영역 -->
      <section
        class="logo-section"
        :style="{
          width: pinned ? `calc(100% - ${scrollY / 8}vw)` : `unset`
        }"
      >
        <nuxt-link class="logo" to="/">
          <logo-interactive class="logo-symbol w-full" />
        </nuxt-link>
      </section>

      <!-- nav 영역 -->
      <section class="nav-section">
        <!-- <div class="nav-toggler">
          <button
            class="toggler"
            :class="{ toggled: navToggle }"
            @click="navToggle = !navToggle"
          >
            <span class="line" v-for="i in 3" :key="i" />
          </button>
        </div> -->

        <!-- <div
          class="util"
          :class="[{ shown: navToggle }]"
          :style="{
            top: `${headerHeight}px`
          }"
        > -->
        <!-- <ul class="list-link">
            <li v-for="(item, i) in linkList" :key="i" class="list-item">
              <template v-if="item?.disabled">
                <UTooltip
                  text="준비중입니다."
                  :popper="{ arrow: true }"
                  class="lg::py-3 h-full flex"
                >
                  <a
                    class="link-item disabled"
                    :class="{ disabled: item?.disabled }"
                    :disabled="item.disabled"
                  >
                    {{ item.name }}
                    <div class="block lg:hidden">(준비중입니다)</div>
                  </a>
                </UTooltip>
              </template>
              <template v-else>
                <nuxt-link
                  :to="item.url"
                  class="link-item"
                  :class="{ disabled: item?.disabled }"
                  :disabled="item.disabled"
                  @mouseover="hoverItem = i"
                  @mouseleave="hoverItem = null"
                  @focus="hoverItem = i"
                  @blur="hoverItem = null"
                >
                  <span
                    :class="
                      pinned
                        ? 'max-lg:text-xl lg:text-xl'
                        : 'max-lg:text-xl lg:text-2xl'
                    "
                  >
                    <UIcon :name="item.icon" class="icon" />
                    {{ hoverItem === i ? item.ko : item.en }}
                  </span>
                </nuxt-link>
              </template>
            </li>
          </ul> -->

        <!-- <ul class="list-sponsor" :class="{ shown: pinned }">
            <li v-for="(item, i) in sponsors" :key="i" class="list-item">
              <div class="item">
                <img
                  :src="`/images/sponsors/${item.src}`"
                  :alt="`${item.name} 로고이미지`"
                  :title="`${item.name} 로고이미지`"
                />
              </div>
            </li>
          </ul> -->
        <!-- </div> -->

        <div class="title flex max-lg:hidden" :class="{ pinned: pinned }">
          <!-- 제목 -->
          <div
            class="heading"
            :style="{
              width: `max(100%, calc(100% - ${scrollY / 100}%))`
            }"
          >
            <!-- <h2
              :style="{
                fontSize: headingFontSize
              }"
            >
              The 5th Asia Trails Conference
            </h2> -->
            <nuxt-img
              src="/lettertype-full-eng.svg"
              provider="defaultProvider"
              :style="{
                width: `max(31rem, calc(55rem - ${scrollY / 20}rem))`
              }"
              class="mix-blend-difference mb-3"
              alt="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
              title="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
            />
          </div>
          <!-- 장소 -->
          <div class="place-and-date max-lg:hidden">
            <h2
              class="mr-4"
              :style="{
                fontSize: headingFontSize,
                fontWeight: 200
              }"
            >
              in JIRISAN
            </h2>
            <h2
              :style="{
                fontSize: headingFontSize
              }"
            >
              2024.10.25.
            </h2>
            <!-- <small>(GMT+9)</small> -->
          </div>
        </div>
        <div class="title flex lg:hidden" :class="{ pinned: pinned }">
          <!-- 제목 -->
          <div class="heading">
            <h2>The 5th Asia Trails Conference</h2>
          </div>
          <!-- 장소 -->
          <div class="place-and-date max-lg:hidden">
            <h2
              :style="{
                fontWeight: 200
              }"
            >
              in Jirisan
            </h2>
            <h2>2024.10.25.</h2>
            <!-- <small>(GMT+9)</small> -->
          </div>
        </div>
      </section>
    </div>
    <!-- 네비게이션 영역 -->
    <nav class="global-header-nav">
      <!-- link영역 -->
      <div class="link-section">
        <ul class="list-link">
          <li v-for="(item, i) in linkList" :key="i" class="list-item">
            <template v-if="item?.disabled">
              <UTooltip
                text="준비중입니다."
                :popper="{ arrow: true }"
                class="lg::py-3 h-full flex"
              >
                <a
                  class="link-item disabled"
                  :class="{ disabled: item?.disabled }"
                  :disabled="item.disabled"
                >
                  {{ item.name }}
                  <div class="block lg:hidden">(준비중입니다)</div>
                </a>
              </UTooltip>
            </template>
            <template v-else>
              <nuxt-link
                :to="item.url"
                class="link-item"
                :class="{ disabled: item?.disabled }"
                :disabled="item.disabled"
              >
                <span
                  :class="
                    pinned
                      ? 'text-base md:text-lg lg:text-3xl'
                      : 'text-base md:text-lg lg:text-2xl'
                  "
                >
                  {{ item.en }}
                </span>
              </nuxt-link>
            </template>
          </li>
          <li class="list-item">
            <button
              class="link-item"
              @click.prevent="$emit('modal-subscribe', true)"
            >
              <span
                :class="
                  pinned
                    ? 'text-base md:text-lg lg:text-3xl'
                    : 'text-base md:text-lg lg:text-2xl'
                "
              >
                Join
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
// import sponsors from "@/data/sponsorList";

const router = useRouter();
const route = useRoute();

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

// 링크 리스트
const linkList = ref([
  {
    ko: "프로그램",
    en: "programs",
    url: "/programs",
    icon: "bx:news"
  },
  {
    ko: "연사",
    en: "speakers",
    url: "/speakers",
    icon: "bx:bxs-microphone"
  }
  // {
  //   ko: "참여하기",
  //   en: "join",
  //   url: "/join",
  //   icon: "bx:bxs-calendar-check"
  // }
]);

const navToggle = ref(false);

// 라우트 이동
watch(
  () => route.path,
  () => {
    if (navToggle.value) {
      navToggle.value = false;
    }
  }
);

// gnb 고정 여부
const pinned = computed(() => {
  return Number(props.scrollY) <= 600;
});

// 헤더에 위치한 제목의 폰트 사이즈
const headingFontSize = computed(() => {
  return `max(3.5rem, calc(5.5rem - ${props.scrollY / 300}rem))`;
});
</script>

<style lang="postcss" scoped>
@keyframes showDown {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}
.global-header {
  @apply w-full top-0 fixed left-1/2 z-[2000] -translate-x-1/2 border-b border-grayscale-800 bg-white;
  transition: all 0.3s ease-out;
  .global-header-top {
    @apply flex items-center flex-col max-lg:flex-row lg:flex-row lg:items-center justify-between mx-auto;
    .logo-section {
      @apply max-lg:w-[55vw] max-lg:min-w-[30vw];
      .logo {
        @apply w-full flex max-lg:flex-col px-2 py-1 lg:py-4 lg:ps-12;
        .logo-symbol {
          @apply lg:min-w-[24rem] lg:min-h-16  w-auto;
        }
        .lettertype {
          @apply w-full max-lg:mt-2 lg:mt-0 lg:px-4;
          img {
            @apply h-full;
          }
        }
      }
    }

    /* nav, 정보 영역 */
    .nav-section {
      @apply max-lg:w-full lg:min-w-[50vw] px-0 md:pe-3 lg:pt-8 lg:pb-6 lg:px-12 lg:w-full;
      /* 토글러 */
      /* .nav-toggler {
        @apply block lg:hidden;
        .toggler {
          @apply flex flex-col justify-between w-8 h-8 mr-1;
          .line {
            @apply block w-full h-2 my-auto bg-black transition-all-default;
            transition: all 0.3s;
            opacity: 1;
          }
          &.toggled {
            .line {
              &:first-child {
                transform: rotate(45deg) translate(0.75rem, 0.25rem);
              }
              &:nth-child(2) {
                transform: translate(32px);
                opacity: 0;
              }
              &:last-child {
                transform: rotate(-45deg) translate(0.75rem, -0.25rem);
              }
            }
          }
        }
      } */
      /* 유틸 */
      /* .util {
        @apply block fixed lg:static max-lg:z-[2000]  border-b-gray-800 max-lg:translate-x-[-50%] max-lg:w-full max-lg:left-[50%] max-lg:translate-y-[-20px] max-lg:opacity-0 max-lg:pointer-events-none  bg-white;
        transition: all 0.3s ease-in-out;
        &.shown {
          @apply max-lg:bg-white max-lg:translate-y-[0] max-lg:opacity-100 max-lg:pointer-events-auto;
        } */
      /* 링크 */
      /* .list-link {
          @apply lg:flex justify-between items-center max-h-[inherit];
          .list-item {
            @apply w-full max-lg:text-center font-semibold text-grayscale-900 px-1;
            .link-item {
              @apply w-full relative h-full max-lg:py-6 lg:py-5 px-8 self-stretch hover:bg-blue-300  border max-lg:border-x-0 max-lg:border-t-0 border-grayscale-900 flex items-center justify-center transition-all-default;
              > span {
                @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-bold flex items-center transition-all;
                .icon {
                  @apply mr-2;
                }
              }
              &.active,
              &.exact-active {
                @apply bg-blue-600 text-green-300;
              }
              &.disabled {
                @apply max-lg:py-3 text-grayscale-700 my-auto opacity-25 bg-grayscale-300;
              }
            }
          }
        } */
      /* 날짜 등의 타이틀 정보 */
      /* } */
      /* 스폰서 목록 */
      /* .list-sponsor {
          @apply max-lg:hidden w-full flex flex-row items-center opacity-0 max-h-[0]  transition-all ease-out duration-100 pointer-events-none;
          &.shown {
            @apply opacity-100 max-h-[1000px];
          }
          .list-item {
            @apply px-2 py-1 mx-auto;
            .item {
              @apply w-full;
              img {
                @apply h-auto w-full;
              }
            }
          }
        } */

      .title {
        @apply flex-col lg:flex-row max-lg:items-start items-center transition-all flex-wrap pt-2 pb-1 px-1 lg:p-0  max-lg:text-xl max-lg:text-left max-lg:py-3;
        @media (min-width: 1023px) {
          letter-spacing: -0.08rem;
          word-spacing: -0.3rem;
        }

        &.pinned {
          @apply lg:flex-col max-lg:items-center lg:items-start lg:justify-start max-lg:text-2xl max-lg:text-center;
          /* .heading,
          .date,
          .place {
            @apply mb-1;
          } */
          /* .place-and-date {
            @apply ;
          } */
        }
        .heading {
          @apply w-full;
        }
        .heading,
        .date,
        .place {
          @apply max-lg:mb-1 xl:px-2;
        }

        h2 {
          @apply font-extrabold text-nowrap;
          line-height: 0.9;
        }

        /* .date {
          @apply flex items-start mr-2;
          small {
            @apply text-sm italic p-0 ;
          }
        } */

        .place-and-date {
          @apply flex flex-nowrap items-start;
          h2 {
            @apply max-lg:mr-1 text-nowrap;
          }
          small {
            @apply text-sm italic lg:pt-1 max-lg:text-xs;
          }
        }
      }
    }
  }
  /* 네비게이션 영역 */
  .global-header-nav {
    /* 링크 영역 */
    .link-section {
      @apply w-full flex-grow-[1] bg-grayscale-950 text-white px-2;
      .list-link {
        @apply flex items-center max-lg:justify-center;
        .list-item {
          .link-item {
            @apply block px-5 md:px-4 py-1 lg:px-4 lg:py-2 border-r border-white lg:min-w-[210px] text-center;
            &:first-child {
              @apply max-lg:border-l;
            }

            span {
              @apply uppercase transition-all;
            }
            &:hover,
            &:focus,
            &:active {
              @apply text-green-200;
            }
            &.active,
            &.exact-active {
              @apply text-green-300;
            }
          }
        }
      }
    }
  }

  &.pinned {
    .global-header-top {
      @apply max-lg:flex-col;
      .logo-section {
        @apply max-lg:w-full;
        .logo {
          @apply lg:ps-12 lg:py-8;
        }
      }
    }
  }
}
</style>
