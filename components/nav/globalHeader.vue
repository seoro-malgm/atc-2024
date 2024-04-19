<template>
  <header class="global-header" :class="{ unpinned: !pinned }">
    <nav class="global-header-nav">
      <!-- 로고 -->
      <nuxt-link class="logo" to="/">
        <!-- <nuxt-img src="/logo.svg" /> -->
        <logo-kor />
      </nuxt-link>
      <!-- 동작영역 -->
      <section class="nav-section">
        <!-- 메뉴 버튼 -->
        <div class="nav-toggler">
          <button
            class="toggler"
            :class="{ toggled: navToggle }"
            @click="navToggle = !navToggle"
          >
            <span class="line" v-for="i in 3" :key="i" />
          </button>
        </div>
        <!-- 메뉴 -->
        <div class="util" :class="{ shown: navToggle }">
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
                  {{ item.name }}
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
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const props = defineProps({
  pinned: {
    type: Boolean,
    default: true
  }
});

const linkList = ref([
  {
    name: "홈",
    url: "/"
  },
  {
    name: "컨퍼런스",
    // url: "/conference"
    disabled: true
  },
  {
    name: "워킹페스티벌",
    url: "/festival",
    disabled: true
  },
  {
    name: "스폰서",
    url: "/together"
  }

  // {
  //   name: "아트페어",
  //   // url: "/artfair"
  //   disabled: true
  // }
]);

const navToggle = ref(false);
// 라우터 이동시 toggle 닫힘
watch(
  () => route.path,
  (n, o) => {
    if (navToggle?.value) {
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
  @apply w-full lg:top-[0] lg:left-[50%] max-lg:fixed max-lg:top-[0] max-lg:left-[50%] z-[2000] max-lg:translate-x-[-50%] bg-white border-b border-grayscale-800;

  .global-header-nav {
    @apply flex items-center justify-between container mx-auto;
    .logo {
      @apply max-lg:py-2 max-lg:px-4  lg:border-l-grayscale-800 lg:py-3 lg:px-4 max-lg:w-[150px] lg:w-3/12 max-w-[150px];
      img {
        @apply w-full;
      }
    }
    .nav-section {
      @apply max-lg:px-4 max-lg:py-2 lg:self-stretch;
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
        @apply block absolute lg:static max-lg:z-[2000] max-lg:border-b border-b-gray-800 max-lg:translate-x-[-50%] max-lg:w-full max-lg:top-[65px] max-lg:left-[50%] max-lg:translate-y-[-20px] max-lg:opacity-0 max-lg:pointer-events-none lg:h-full bg-white;
        transition: all 0.3s ease-in-out;
        &.shown {
          @apply max-lg:bg-white max-lg:translate-y-[0] max-lg:opacity-100 max-lg:pointer-events-auto;
        }
        .list-link {
          @apply lg:flex lg:items-stretch max-h-[inherit] lg:h-full;
          .list-item {
            @apply max-lg:w-full max-lg:text-center font-semibold text-grayscale-900;
            .link-item {
              @apply w-full text-lg h-full lg:text-xl max-lg:py-3 px-8 self-stretch hover:bg-purple-heart-400 hover:text-spring-green-400  border-x border-grayscale-800 flex items-center justify-center transition-all-default;
              &:last-child {
                @apply border-r-0;
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
    @apply lg:fixed;
    transform: translate(-50%, -100%);
    animation: showDown 0.2s forwards;
    .global-header-nav {
      @apply mx-auto border-b-0;
      .logo {
        @apply lg:border-l;
      }
    }
    .nav-section {
      .util {
        .list-link {
          .list-item {
            .link-item {
              &:last-child {
                border-right-width: 1px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
