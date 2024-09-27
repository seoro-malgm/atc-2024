<template>
  <div class="section-join">
    <div class="section-body">
      <div class="section-col" v-for="(item, i) in items" :key="item.title">
        <div class="section-col-item">
          <header class="section-col-item-title">
            <button
              class="collapse-button lg:hidden max-lg:flex"
              @click="toggleCollapse(i + 1)"
              :class="{ collapsed: collapsed && collapsed === i + 1 }"
            >
              <span class="title">
                {{ item.title }}
              </span>
              <div class="arrow">
                <span class="bar" />
                <span class="emoji">{{ item.emoji }}</span>
                <span class="bar" />
              </div>
            </button>
            <span class="title max-lg:hidden lg:block">
              {{ item.title }}
            </span>
          </header>
          <div
            class="section-col-item-content"
            :class="{ collapsed: collapsed && collapsed === i + 1 }"
          >
            <figure class="section-col-item-poster">
              <template v-if="item.poster">
                <nuxt-img
                  provider="storageBucket"
                  :src="item?.poster"
                  alt="poster"
                  sizes="100% lg:25vw"
                  placeholder
                />
              </template>
              <template v-else>
                <div class="section-col-item-poster-placeholder">
                  <span class="text"> 포스터가 준비중입니다 </span>
                </div>
              </template>
            </figure>
            <section class="section-col-item-infos">
              <div class="section-col-item-info">
                <div class="date">{{ item.date }}</div>
                <div class="location">{{ item.location }}</div>
              </div>
              <div class="section-col-item-additional-infos">
                <div
                  class="section-col-item-additional-info"
                  v-for="info in item.additionalInfos"
                  :key="info"
                >
                  {{ info }}
                </div>
              </div>
            </section>
            <footer class="section-col-item-footer">
              <ul>
                <li v-for="link in item.links" :key="link.title">
                  <template v-if="link?.url">
                    <a
                      class="section-col-item-footer-link"
                      :href="link.url"
                      target="_blank"
                    >
                      {{ link.title }}
                    </a>
                  </template>
                  <template v-if="link?.path">
                    <nuxt-link
                      class="section-col-item-footer-link"
                      :to="`/${link.path}`"
                    >
                      {{ link.title }}
                    </nuxt-link>
                  </template>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({
//   data: {
//     type: String,
//     default: null
//   }
// });
const emit = defineEmits();
// const img = useImage();
import { useLocaleStore } from "@/stores/locale";
// 언어 store
const localeStore = useLocaleStore();

import { useRoute } from "vue-router";
const route = useRoute();
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

const { t } = useI18n();

const items = computed(() => {
  return [
    {
      title: t("join_conference_title"),
      poster: "/posters/poster01.png",
      date: t("join_conference_datetime"),
      emoji: "🎯",
      location: t("join_conference_place"),
      additionalInfos: [t("join_conference_duedate")],
      links: [
        {
          title: t("join_festival_btn1"),
          url: "https://adsld.link/N1Yeht"
        },
        {
          title: t("join_festival_btn2"),
          url: "https://adsld.link/j7X9AT"
        },
        {
          title: t("join_festival_btn3"),
          path: `${currentLocale.value}/programs`
        }
      ]
    },
    {
      title: t("join_festival_title"),
      poster: "/posters/poster02.png",
      date: t("join_festival_datetime"),
      emoji: "🏃‍♂️",
      location: t("join_festival_place"),
      additionalInfos: [t("join_festival_duedate")],
      links: [
        {
          title: t("join_festival_btn1"),
          url: "https://adsld.link/IrsCVY"
        },
        {
          title: t("join_festival_btn2"),
          url: "https://adsld.link/tpvvTR"
        },
        {
          title: t("join_festival_btn3"),
          url: "https://adsld.link/0SRsBt"
        }
      ]
    },
    {
      title: t("join_explorers_title"),
      poster: "/posters/poster03.png",
      date: t("join_explorers_datetime"),
      emoji: "🌳",
      location: t("join_explorers_place"),
      additionalInfos: [t("join_explorers_duedate")],
      links: [
        {
          title: t("join_festival_btn1"),
          url: "https://adsld.link/hySO9d"
        },

        {
          title: t("join_festival_btn3"),
          url: "https://adsld.link/nW1gL1"
        }
      ]
    },
    {
      title: t("join_workshop_title"),
      poster: "/posters/poster04.png",
      date: t("join_workshop_datetime"),
      emoji: "👩‍💻",
      location: t("join_workshop_place"),
      additionalInfos: [t("join_workshop_duedate")],
      links: [
        {
          title: t("join_festival_btn1"),
          url: "https://adsld.link/kQ43io"
        }
      ]
    }
  ];
});

const collapsed = ref(null);
const toggleCollapse = index => {
  if (collapsed.value === index) {
    collapsed.value = null;
  } else {
    collapsed.value = index;
  }
};
</script>

<style lang="postcss" scoped>
.section-body {
  @apply p-4;
}
.section-body {
  @apply grid grid-cols-1 lg:grid-cols-4 gap-4;
  .section-col {
    @apply border-x border-b border-grayscale-800;
    .section-col-item {
      .section-col-item-title {
        @apply border-y border-grayscale-800 p-4 text-xl lg:text-2xl font-bold text-green-800 min-h-[88px] flex items-center justify-center;
        .collapse-button {
          @apply max-lg:flex justify-between items-center w-full;
          .title {
            @apply flex-1 truncate pe-2;
          }
          .arrow {
            @apply w-10 h-4 relative flex flex-col justify-between items-center overflow-hidden;
            .bar {
              @apply block w-10 h-0.5 bg-green-800 transition-all-default;
              &:first-child {
                @apply rotate-[25deg] -translate-x-[20px] translate-y-[4px];
              }
              &:last-child {
                @apply rotate-[-30deg] translate-x-[16px] -translate-y-[10px];
              }
            }
            .emoji {
              @apply text-xl lg:text-2xl absolute-center opacity-0 transition-all-default;
            }
          }
          &.collapsed {
            .arrow {
              @apply h-10;
              .bar {
                @apply w-10 rotate-0 translate-x-0 translate-y-0;
              }
              .emoji {
                @apply opacity-100;
              }
            }
          }
        }
      }
      .section-col-item-content {
        @apply max-lg:max-h-0 max-lg:overflow-hidden transition-all-default;
        transition: max-height 0.2s;
        &.collapsed {
          @apply max-lg:max-h-[auto];
          max-height: 1000px;
        }
      }
      .section-col-item-poster {
        @apply border-b border-grayscale-800 aspect-square bg-grayscale-200;
        img {
          @apply w-full h-auto;
        }
        .section-col-item-poster-placeholder {
          @apply w-full aspect-square bg-grayscale-300 relative;
          span.text {
            @apply absolute-center text-sm;
          }
        }
      }
      .section-col-item-infos {
        @apply p-4;
        .section-col-item-info {
          @apply text-center text-lg lg:text-xl  font-bold;
        }
        .section-col-item-additional-infos {
          @apply text-center text-sm my-3;
        }
      }
      .section-col-item-footer {
        @apply px-4 pb-4;
        ul {
          @apply flex flex-col justify-center;
          li {
            @apply m-2;
            a {
              @apply block bg-green-800 text-center p-4 lg:p-6 text-white text-lg lg:text-2xl font-bold hover:scale-105 transition-all-default;
            }
          }
        }
      }
    }
  }
}
</style>
