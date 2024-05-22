<template>
  <section class="section-conference" ref="container">
    <header-section> 소식 구독하기 </header-section>
    <div class="description">
      <p>
        컨퍼런스 및 워킹페스티벌이 10월에 열린다. 행사 전에 행사진행소식과
        할인혜택 등 다양한 소식을 들려드리겠다. 관심있으면 구독해라
      </p>
    </div>

    <div class="content">
      <section class="part left">
        <button
          class="article-wrap"
          @click.prevent="sbuscribeModalShown = true"
          ref="articleLeft"
        >
          <article>
            <!-- <header class="article-header">
              <h5>컨퍼런스</h5>
            </header> -->
            <section class="article-body">
              <nuxt-img
                v-for="(item, i) in items"
                :alt="`컨퍼런스 ${i + 1}번째 이미지`"
                :class="{ first: i === 0 }"
                :src="`${item.src}`"
                :style="{
                  transform: `translate(-50%, -50%) ${item.transform}`,
                  transitionDelay: `${i * 0.1}s`
                }"
                :key="i"
                provider="storageBucket"
              />
            </section>
            <footer class="article-footer">
              <span>
                미리 소식 구독하기
                <UIcon class="icon" name="bxs:paper-plane" />
              </span>
            </footer>
          </article>
        </button>
      </section>
      <!-- 워킹페스티벌 -->
      <!-- <section class="part right">
        <button
          class="article-wrap"
          @click.prevent="sbuscribeModalShown = true"
          ref="articleRight"
        >
          <article>
            <header class="article-header">
              <h5>워킹 페스티벌</h5>
            </header>
            <section class="article-body">
              <nuxt-img
                v-for="(item, i) in items2"
                :alt="`워킹 페스티벌 ${i + 1}번째 이미지`"
                :class="{ first: i === 0 }"
                :src="`${item.src}`"
                :style="{
                  transform: `translate(-50%, -50%) ${item.transform}`,
                  transitionDelay: `${i * 0.1}s`
                }"
                :key="i"ㅇ
              />
            </section>
            <footer class="article-footer">
              <span>
                미리 소식 구독하기
                <UIcon class="icon" name="bxs:paper-plane" />
              </span>
            </footer>
          </article>
        </button>
      </section> -->
      <modal-subscribe
        :shown="sbuscribeModalShown"
        @toggle="$event => (sbuscribeModalShown = $event)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});

const items = [
  {
    src: "dummy.png",
    transform: "rotate(4deg)"
  },
  {
    src: "dummy.png",
    transform: "rotate(15deg)"
  },
  {
    src: "dummy.png",
    transform: "rotate(-9deg)"
  },
  {
    src: "dummy.png",
    transform: "rotate(-13deg)"
  }
];

const items2 = [
  {
    src: "dummy.png",
    transform: "rotate(-4deg)"
  },
  {
    src: "dummy.png",
    transform: "rotate(-13deg)"
  },
  {
    src: "dummy.png",
    transform: "rotate(7deg)"
  },
  {
    src: "dummy.png",
    transform: "rotate(13deg)"
  }
];

// 구독 폼 열기
const sbuscribeModalShown = ref(false);
</script>

<style lang="postcss" scoped>
.section-conference {
  @apply max-w-full overflow-hidden;
  > .description {
    @apply py-4 text-lg lg:text-2xl border-b border-grayscale-800;
    p {
      @apply text-center container;
    }
  }
  .content {
    @apply flex flex-col lg:flex-row lg:-mx-6 lg:items-stretch justify-center;
    .part {
      @apply lg:mb-0 border-gray-800 lg:px-6 w-full flex justify-stretch items-stretch;
      /* &.left {
        > .article-wrap {
          @apply lg:border-r border-gray-800;
        }
      }
      &.right {
        > .article-wrap {
          @apply max-lg:border-t lg:border-l border-gray-800;
        }
      } */

      .article-wrap {
        @apply bg-baja-white-50 relative z-[2] self-stretch w-full flex flex-col justify-between h-full py-12 lg:pt-[10rem];
        > article {
          @apply self-stretch flex flex-col justify-between h-full;
          .article-header {
            @apply text-center px-4 py-6 lg:py-9;
            h5 {
              @apply font-bold text-4xl lg:text-[3rem];
            }
          }
          .article-body {
            @apply px-4 h-full pb-[50vh] relative;
            img {
              @apply absolute block w-full h-auto max-w-[80vw] lg:max-w-[50%] top-[50%] left-[50%] scale-105 transition-all-default shadow-xl;
              opacity: 0;
              &.first {
                @apply opacity-100;
              }
            }
          }
          .article-footer {
            @apply px-8 py-12 mt-auto text-2xl lg:text-3xl relative text-right;
            span {
              @apply absolute-center;
            }
            .icon {
              @apply ml-auto lg:text-4xl -mt-2;
            }
            span,
            .icon {
              @apply transition-all-default font-semibold;
            }
          }
        }
        &:hover {
          > article {
            .article-header {
            }
            .article-body {
              img {
                @apply opacity-100 scale-100;
                &.first {
                  @apply opacity-100;
                }
              }
            }
            .article-footer {
              span {
                transform: translate(-50%, -50%) skew(-15deg);
              }
              .icon {
                transform: translate(8px, -8px);
              }
            }
          }
        }
      }
      /* 배경 */
      /* .bg {
        @apply absolute top-[50%] left-[50%] z-[-1] object-cover h-full w-auto translate-x-[-50%] translate-y-[-50%];
        transition: all 0.02s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      } */
    }
  }
}
</style>
