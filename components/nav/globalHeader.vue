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
          width: pinned ? `calc(100% - ${scrollY / 10}vw)` : `unset`
        }"
      >
        <nuxt-link class="logo" :to="`/${currentLocale}/home`">
          <logo-interactive class="logo-symbol w-full" />
        </nuxt-link>
      </section>

      <!-- nav 영역 -->
      <section class="nav-section">
        <div class="title flex max-lg:hidden" :class="{ pinned: pinned }">
          <!-- 제목 -->
          <div
            class="heading"
            :style="{
              width: `max(100%, calc(100% - ${scrollY / 100}%))`
            }"
          >
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
        <div
          class="title flex flex-col items-center justify-center lg:hidden"
          :class="{ pinned: pinned }"
        >
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
        <ul class="list-link" v-if="validate">
          <li v-for="(item, i) in linkList" :key="i" class="list-item">
            <nuxt-link
              :to="
                item?.url
                  ? `/${currentLocale}/${item.url}`
                  : item.path
                  ? item.path
                  : `/${currentLocale}/home`
              "
              class="link-item"
              :class="{ disabled: item?.disabled }"
              :disabled="item.disabled"
              :target="item?.target"
            >
              <span
                :class="
                  pinned
                    ? 'text-base md:text-lg lg:text-3xl'
                    : 'text-base md:text-lg lg:text-2xl'
                "
              >
                {{ $t(item.key) }}
              </span>
            </nuxt-link>
          </li>

          <!-- join 모달 버튼 -->
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
                {{ $t("global_gnb_item03_join") }}
              </span>
            </button>
          </li>
          <li class="list-item ms-auto pt-1">
            <UPopover
              color="bg-grayscale-900"
              :popper="{
                placement: 'bottom-end'
              }"
            >
              <button class="flex items-center">
                <UIcon
                  name="ic:round-language"
                  class="w-6 h-6 lg:w-8 lg:h-8 text-white"
                />
                <span
                  class="uppercase lg:ms-1 font-bold w-8 max-lg:w-5 max-lg:text-sm"
                >
                  <!-- {{ $t("lang") }} -->
                  <span class="max-lg:hidden">
                    {{ locale }}
                  </span>
                </span>
              </button>

              <template #panel="{ close }">
                <ul class="bg-grayscale-900 p-1">
                  <li
                    class="px-3 py-1"
                    v-for="(item, i) in langs"
                    :key="item.id"
                  >
                    <button
                      @click="
                        // updateLang(item.id);
                        navigateTo(`/${item.id}/home`);
                        close();
                      "
                      :class="{ active: locale === item.id }"
                    >
                      {{ item.label }}
                    </button>
                  </li>
                </ul>
              </template>
            </UPopover>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useLocaleStore } from "@/stores/locale";

const route = useRoute();
// const router = useRouter();

const props = defineProps({
  scrollY: {
    type: [Number, String],
    default: 0
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  },
  validate: {
    type: Boolean,
    default: false
  }
});

// 링크 리스트
const linkList = ref([
  {
    key: "global_gnb_item01_programs",
    url: "programs"
  },
  {
    key: "global_gnb_item02_speakers",
    url: "speakers"
  }
  // {
  //   key: "global_gnb_item04_festival",
  //   path: "/festival",
  //   target: "_blank"
  // },
  // {
  //   key: "global_gnb_item05_tour",
  //   path: "/tour",
  //   target: "_blank"
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
  return Number(props.scrollY) <= 550;
});

// 헤더에 위치한 제목의 폰트 사이즈
const headingFontSize = computed(() => {
  return `max(3.5vw, calc(4.5vw - ${props.scrollY / 300}vw))`;
});

// toast
const toast = useToast();

// i18n
const { t, setLocale, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
// 언어 store
const localeStore = useLocaleStore();

// params에 세팅된 언어
const paramsLang = computed(() => {
  return route?.params?.lang;
});

/**
 * 현재 언어 상태 확인
 * @param lang 최우선으로 현재 경로의 lang param
 * @argument locale 그 뒤의 locale 값
 * 모두 없으면 기본 언어 'ko'
 */
const currentLocale = computed(() => {
  return paramsLang?.value || locale.value || "ko";
});
const langs = computed(() => {
  return localeStore.allLocales;
});

// 언어 업데이트
const updateLang = async id => {
  if (!id || !locale.value) return;
  if (id === locale.value) return;
  for (let index = 0; index < langs.value.length; index++) {
    const lang = langs.value[index].id;
    if (lang) {
      switchLocalePath(id);
      setLocale(id);
      localeStore.setLocale(id); // Pinia store에 저장
    }
  }
  switchLocalePath("ko");
  setLocale("ko");
  localeStore.setLocale("ko"); // Pinia store에 저장
};

// 현재 언어 확인하여 적용
onMounted(() => {
  updateLang(currentLocale.value);
});

// 라우트 이동시 언어감지, 적용
watch(
  () => route.path,
  n => {
    // 현재 언어와 locale 설정과 다른경우 적용
    if (currentLocale.value !== locale.value) {
      updateLang(currentLocale.value);
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
  @apply w-full top-0 fixed left-1/2 z-[2000] -translate-x-1/2 border-b border-grayscale-800 bg-white;
  transition: all 0.3s ease-out;
  .global-header-top {
    @apply flex items-center flex-col max-lg:flex-row lg:flex-row lg:items-center justify-between mx-auto;
    .logo-section {
      @apply max-lg:w-[55vw] max-lg:min-w-[30vw];
      .logo {
        @apply w-full flex max-lg:flex-col px-2 py-1 lg:py-4 lg:ps-12;
        .logo-symbol {
          @apply lg:min-w-[18rem] 2xl:min-w-[24rem] lg:min-h-16 w-full h-auto;
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

      .title {
        @apply flex-col lg:flex-row max-lg:items-start items-center transition-all flex-wrap pt-2 pb-1 px-1 lg:p-0  max-lg:text-xl max-lg:text-left max-lg:py-3;
        @media (min-width: 1023px) {
          letter-spacing: -0.08rem;
          word-spacing: -0.3rem;
        }
        &.pinned {
          @apply lg:flex-col max-lg:items-center lg:items-start lg:justify-start max-lg:text-2xl max-lg:text-center;
          .place-and-date {
            @apply max-lg:justify-center;
          }
          .heading {
            @apply w-full pe-3 max-lg:text-2xl;
          }
        }
        .heading {
          @apply w-full pe-3 max-lg:text-lg;
        }
        .heading,
        .date,
        .place {
          @apply max-lg:mb-1;
        }

        h2 {
          @apply font-extrabold;
          line-height: 0.9;
        }

        .place-and-date {
          @apply flex flex-nowrap items-center max-lg:justify-start mx-auto w-full;
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
      @apply w-full flex-grow-[1] bg-grayscale-950 text-white lg:px-2;
      .list-link {
        @apply flex items-center max-lg:justify-center flex-wrap;
        .list-item {
          .link-item {
            @apply block px-4 md:px-4 pt-1 pb-2 lg:px-4 lg:py-2 border-r border-white lg:min-w-[210px] text-center text-nowrap;
            &:first-child {
              @apply max-lg:border-l;
            }

            span {
              @apply uppercase transition-all max-lg:text-sm;
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
        &:first-child {
          .link-item {
            @media all and (min-width: 1204px) {
              border-left-width: 0 !important;
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
