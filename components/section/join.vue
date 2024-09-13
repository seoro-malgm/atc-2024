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
                  :src="item.poster"
                  alt="poster"
                  sizes="100% lg:25vw"
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
                  <a
                    class="section-col-item-footer-link"
                    :href="link.url"
                    target="_blank"
                  >
                    {{ link.title }}
                  </a>
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
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emit = defineEmits();

const items = ref([
  {
    title: "제 5회 아시아 트레일즈 컨퍼런스",
    poster: "/posters/poster01.jpg",
    date: "2024.10.25. (금) 10:30~18:30",
    emoji: "🎯",
    location: "전남 구례군 더케이 호텔 그랜드볼룸",
    additionalInfos: ["사전 참가 신청기간 9.13. (금) - 9.30. (월)"],
    links: [
      {
        title: "참가신청 / registration",
        url: "https://www.onoffmix.com/event/308083"
      },
      {
        title: "자원봉사 신청 / volunteer",
        url: "https://cut-monkey-9e4.notion.site/2024-ATC-5bcd635f4ae04d638cbb40c04ef90948"
      },
      {
        title: "자세히 보기 / information",
        url: "https://atcjirisan.com/ko/programs"
      }
    ]
  },
  {
    title: "2024 지리산둘레길 걷기축제",
    poster: "/posters/poster02.jpg",
    date: "2024.10.26. (토) 10:00~18:00",
    emoji: "🏃‍♂️",
    location: "전남 구례군 지리산역사문화관",
    additionalInfos: ["사전 참가 신청기간 9.13. (금) - 9.30. (월)"],
    links: [
      {
        title: "참가신청 / registration",
        url: "https://www.onoffmix.com/event/308375"
      },
      {
        title: "자원봉사 신청 / volunteer",
        url: null
      },
      {
        title: "자세히 보기 / information",
        url: "https://www.notion.so/otherpado/2024-438c364f843142b9a89b57901d4872b8"
      }
    ]
  },
  {
    title: "2024 지리산 숲길 탐험대",
    poster: null,
    date: "2024.10.27. (일) 11:00~18:00",
    emoji: "🌳",
    location: "지리산 6개 시군",
    additionalInfos: ["사전 참가 신청기간 9.13. (금) - 9.30. (월)"],
    links: [
      {
        title: "참가신청 / registration",
        url: "https://www.onoffmix.com/event/308377"
      },

      {
        title: "자세히 보기 / information",
        url: "https://www.notion.so/2024-c13152aea41549b19f45b491f900a05a?pvs=21"
      }
    ]
  },
  {
    title: "2024 지리산둘레길 워크샵",
    poster: null,
    date: "2024.10.25. (금) 10:30~18:30 ",
    emoji: "👩‍💻",
    location: "전남 구례군 더케이 호텔 그랜드볼룸",
    additionalInfos: ["사전 참가 신청기간 9.13. (금) - 9.30. (월)"],
    links: [
      {
        title: "참가신청 / registration",
        url: "https://www.onoffmix.com/event/309230"
      }
    ]
  }
]);

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
        @apply border-b border-grayscale-800;
        img {
          @apply w-full h-auto;
        }
        .section-col-item-poster-placeholder {
          @apply w-full aspect-video lg:aspect-[210/297] bg-grayscale-300 relative;
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
