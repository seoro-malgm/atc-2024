<template>
  <header class="global-header" ref="gnb" :class="{ unpinned: scrollY > 10 }">
    <nav class="global-header-nav">
      <nuxt-link
        class="logo"
        to="/"
        :style="{
          width: `calc(100% - ${scrollY / 4}%)`
        }"
      >
        <logo-interactive />
        <div class="lettertype">
          <nuxt-img src="/lettertype-full-eng.svg" />
        </div>
      </nuxt-link>

      <section class="nav-section">
        <div class="title" :class="{ flex: scrollY > 320 }">
          <div class="date">
            <h2
              :style="{
                fontSize: `calc(5.5rem - ${scrollY / 100}rem)`,
                fontSize: `max(2.8rem, calc(5.5rem - ${scrollY / 100}rem))`
              }"
            >
              2024.10.25
            </h2>
            <small>(GMT+9)</small>
          </div>

          <h2
            :style="{
              fontSize: `calc(5.5rem - ${scrollY / 100}rem)`,
              fontSize: `max(2.8rem, calc(5.5rem - ${scrollY / 100}rem))`
            }"
          >
            10:00~20:00
          </h2>
        </div>

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
            top: `${headerHeight}px`
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
                  <span>
                    <UIcon :name="item.icon" class="icon" />
                    {{ hoverItem === i ? item.ko : item.en }}
                  </span>
                </nuxt-link>
              </template>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

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
  @apply w-full top-0 fixed left-1/2 z-[2000] -translate-x-1/2 bg-white border-b border-grayscale-800 px-2 py-2 lg:px-4 lg:py-4;

  .global-header-nav {
    @apply flex items-start justify-between  mx-auto;
    .logo {
      @apply min-w-[55vw] lg:min-w-[420px];
      img {
        @apply w-full;
      }
    }
    .nav-section {
      @apply max-lg:px-4 max-lg:py-2 lg:self-stretch;
      .title {
        @apply max-lg:hidden px-4 py-2;
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
      .nav-toggler {
        @apply block lg:hidden;
        .toggler {
          @apply flex flex-col justify-between w-6 h-6 mr-1;
          .line {
            @apply block w-full h-1 my-auto bg-black transition-all-default;
            transition: all 0.3s;
            opacity: 1;
          }
          &.toggled {
            .line {
              &:first-child {
                transform: rotate(45deg) translate(0.5rem, 0.25rem);
              }
              &:nth-child(2) {
                transform: translate(32px);
                opacity: 0;
              }
              &:last-child {
                transform: rotate(-45deg) translate(0.5rem, -0.25rem);
              }
            }
          }
        }
      }
      .util {
        @apply block fixed lg:static max-lg:z-[2000]  border-b-gray-800 max-lg:translate-x-[-50%] max-lg:w-full max-lg:left-[50%] max-lg:translate-y-[-20px] max-lg:opacity-0 max-lg:pointer-events-none  bg-white lg:ps-2;
        transition: all 0.3s ease-in-out;
        &.shown {
          @apply max-lg:bg-white max-lg:translate-y-[0] max-lg:opacity-100 max-lg:pointer-events-auto;
        }
        .list-link {
          @apply lg:flex justify-between items-center  max-h-[inherit];
          .list-item {
            @apply w-full max-lg:text-center font-semibold text-grayscale-900 px-1;
            .link-item {
              @apply w-full relative text-lg h-full lg:text-xl max-lg:py-6 lg:py-5 lg:min-w-[180px] px-8 self-stretch hover:bg-purple-heart-400 hover:text-spring-green-400  border max-lg:border-x-0 max-lg:border-t-0 border-grayscale-900 flex items-center justify-center transition-all-default;
              > span {
                @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-bold max-lg:text-2xl flex items-center;
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
      }
    }
  }

  &.unpinned {
    /* @apply lg:fixed; */
    /* transform: translate(-50%, -100%); */
    /* animation: showDown 0.2s forwards; */
    .global-header-nav {
      /* @apply mx-auto border-b-0; */
      /* .logo { */
      /* } */
    }
    .nav-section {
      .title {
        h2 {
        }
      }
      /* .util {
        .list-link {
          .list-item {
            .link-item {
              &:last-child {
                border-right-width: 1px;
              }
            }
          }
        }
      } */
    }
  }
}
</style>
