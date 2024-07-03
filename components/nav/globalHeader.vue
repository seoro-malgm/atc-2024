<template>
  <header class="global-header" ref="gnb" :class="{ unpinned: scrollY > 10 }">
    <nav class="global-header-nav">
      <!-- 로고 영역 -->
      <section class="logo-section">
        <nuxt-link class="logo" to="/" :class="{ pinned: pinned }">
          <logo-interactive
            class="logo-symbol hidden lg:block"
            :style="{
              width: pinned ? `calc(100% - ${scrollY / 4}%)` : 'unset'
            }"
          />
          <logo-interactive class="logo-symbol lg:hidden w-full" />
          <div class="lettertype">
            <nuxt-img
              src="/lettertype-full-eng.svg"
              provider="defaultProvider"
            />
          </div>
        </nuxt-link>
      </section>
      <!-- nav 영역 -->
      <section class="nav-section">
        <div class="nav-toggler">
          <button
            class="toggler"
            :class="{ toggled: navToggle }"
            @click="navToggle = !navToggle"
          >
            <span class="line" v-for="i in 3" :key="i" />
          </button>
        </div>

        <div
          class="util"
          :class="[{ shown: navToggle }]"
          :style="{
            top: `${headerHeight}px`,
            paddingTop: pinned ? '0' : `0.6rem`
          }"
        >
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
          </ul>
          <div class="title" :class="{ shown: pinned }">
            <div class="date">
              <h2
                :style="{
                  fontSize: `calc(5rem - ${scrollY / 100}rem)`,
                  fontSize: `max(2.8rem, calc(5rem - ${scrollY / 100}rem))`
                }"
              >
                2024.10.25
              </h2>
              <small>(GMT+9)</small>
            </div>

            <h2
              :style="{
                fontSize: `calc(5rem - ${scrollY / 100}rem)`,
                fontSize: `max(2.8rem, calc(5rem - ${scrollY / 100}rem))`
              }"
            >
              10:00~20:00
            </h2>
          </div>
          <ul class="list-sponsor" :class="{ shown: pinned }">
            <li v-for="(item, i) in sponsors" :key="i" class="list-item">
              <div class="item">
                <img
                  :src="`/images/sponsors/${item.src}`"
                  :alt="`${item.name} 로고이미지`"
                  :title="`${item.name} 로고이미지`"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import sponsors from "@/data/sponsorList";

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
  },
  {
    ko: "참여하기",
    en: "join",
    url: "/join",
    icon: "bx:bxs-calendar-check"
  }
]);

const navToggle = ref(false);
const hoverItem = ref(null);

watch(
  () => route.path,
  () => {
    if (navToggle.value) {
      navToggle.value = false;
    }
  }
);

const pinned = computed(() => {
  return Number(props.scrollY) <= 200;
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
  @apply w-full top-0 fixed left-1/2 z-[2000] -translate-x-1/2 bg-white border-b border-grayscale-800 px-2 py-2 lg:px-4 lg:pt-3;
  transition: all 0.3s ease-out;
  .global-header-nav {
    @apply flex items-center lg:items-start justify-between mx-auto;
    .logo-section {
      @apply max-lg:max-w-[60vw] lg:max-w-[65%] w-full;
      .logo {
        @apply w-full flex max-lg:flex-col;
        /* 고정시 */
        &.pinned {
          @apply lg:flex-col;
          .logo-symbol {
            @apply w-full h-auto lg:max-h-[unset];
          }
          .lettertype {
            @apply mt-2 lg:px-0;
            img {
              @apply h-full;
            }
          }
        }
        /* 고정해제 */
        .logo-symbol {
          @apply lg:min-w-[unset] lg:min-h-16 lg:max-h-[64px] w-auto;
        }
        .lettertype {
          @apply w-full max-lg:mt-2 lg:mt-0 lg:px-4;
          img {
            @apply h-full;
          }
        }
      }
    }
    .nav-section {
      @apply max-lg:px-2 max-lg:py-1 lg:self-stretch lg:max-w-[50%] xl:max-w-[35%];
      /* 토글러 */
      .nav-toggler {
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
      }
      /* 유틸 */
      .util {
        @apply block fixed lg:static max-lg:z-[2000]  border-b-gray-800 max-lg:translate-x-[-50%] max-lg:w-full max-lg:left-[50%] max-lg:translate-y-[-20px] max-lg:opacity-0 max-lg:pointer-events-none  bg-white lg:ps-2;
        transition: all 0.3s ease-in-out;
        &.shown {
          @apply max-lg:bg-white max-lg:translate-y-[0] max-lg:opacity-100 max-lg:pointer-events-auto;
        }
        /* 링크 */
        .list-link {
          @apply lg:flex justify-between items-center max-h-[inherit];
          .list-item {
            @apply w-full max-lg:text-center font-semibold text-grayscale-900 px-1;
            .link-item {
              @apply w-full relative h-full max-lg:py-6 lg:py-5 px-8 self-stretch hover:bg-purple-heart-300  border max-lg:border-x-0 max-lg:border-t-0 border-grayscale-900 flex items-center justify-center transition-all-default;
              > span {
                @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-bold flex items-center transition-all;
                .icon {
                  @apply mr-2;
                }
              }
              &.active,
              &.exact-active {
                @apply bg-purple-heart-600 text-spring-green-300;
              }
              &.disabled {
                @apply max-lg:py-3 text-grayscale-700 my-auto opacity-25 bg-grayscale-300;
              }
            }
          }
        }
        /* 날짜 등의 타이틀 정보 */
        .title {
          @apply max-lg:hidden  opacity-0 max-h-[0] transition-all ease-out duration-100;
          &.shown {
            @apply opacity-100 px-4 py-2 max-h-[1000px];
          }
          h2 {
            @apply font-extrabold text-nowrap;
            letter-spacing: -0.8px;
            line-height: 0.9;
            word-spacing: -0.9px;
          }
          .date {
            @apply flex items-start mr-2;
            small {
              @apply text-sm italic pt-1;
            }
          }
        }
        /* 스폰서 목록 */
        .list-sponsor {
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
        }
      }
    }
  }

  &.unpinned {
    /* ... */
  }
}
</style>
