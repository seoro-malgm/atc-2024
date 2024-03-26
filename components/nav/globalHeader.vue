<template>
  <header class="global-header" :class="{ unpinned: !pinned }">
    <nav class="global-header-nav">
      <!-- 로고 -->
      <nuxt-link class="logo" to="/">
        <!-- <nuxt-img src="/logo.svg" /> -->
        <logo-kor></logo-kor>
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
                <UTooltip text="준비중입니다." :popper="{ arrow: true }">
                  <span class="link-item disabled">
                    {{ item.name }}
                  </span>
                </UTooltip>
              </template>
              <template v-else>
                <nuxt-link :to="item.url" class="link-item">
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
    name: "HOME",
    url: "/"
  },
  {
    name: "ATC 참가신청",
    url: "/subscribe"
  },
  {
    name: "컨퍼런스",
    // url: "/conference"
    disabled: true
  },
  {
    name: "아트페어",
    // url: "/artfair"
    disabled: true
  }
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
  @apply max-lg:fixed max-lg:top-[0] max-lg:left-[50%] z-[2000];
  &.unpinned {
    @apply w-full lg:top-[0] lg:left-[50%] lg:fixed bg-white;
    transform: translate(-50%, -100%);
    animation: showDown 0.3s forwards;
  }

  .global-header-nav {
    @apply pb-2 border-b flex items-center justify-between;
    .logo {
      @apply px-3 pt-3 pb-1 lg:px-4 lg:pt-4 lg:pb-2 w-3/12 lg:w-1/12;
      img {
        @apply w-full;
      }
    }
    .nav-section {
      @apply px-3 lg:px-4 lg:mt-2;
      .nav-toggler {
        @apply block lg:hidden;
        .toggler {
          @apply flex flex-col justify-between w-6 h-6 mt-2 mr-1;
          .line {
            @apply block w-full h-1 my-auto bg-black ease-default;
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
        @apply block absolute lg:static max-lg:z-[1050] max-lg:translate-x-[-50%] max-lg:w-full max-lg:top-[58px] max-lg:left-[50%] max-lg:translate-y-[-20px] max-lg:opacity-0 max-lg:pointer-events-none;
        transition: all 0.3s ease-in-out;
        &.shown {
          @apply max-lg:bg-white max-lg:translate-y-[0] max-lg:opacity-100 max-lg:pointer-events-auto;
        }
        .list-link {
          @apply flex max-lg:flex-col items-center;
          .list-item {
            @apply lg:ml-4 max-lg:w-full max-lg:text-center;
            .link-item {
              @apply block w-full text-lg lg:text-xl max-lg:py-3;
              &.disabled {
                @apply text-gray-500 opacity-25;
              }
            }
          }
        }
      }
    }
  }
}
</style>
