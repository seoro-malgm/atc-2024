<template>
  <div id="sponsor-benefits">
    <header-section class="-my-[1px]"> 스폰서 혜택 </header-section>
    <div class="content">
      <!-- flex 보기 타입 -->
      <template v-if="viewType === 'flex'">
        <div class="view-flex">
          <ul class="list-benefit">
            <li v-for="(item, i) in items" :key="i" class="list-item">
              <figure class="benefit">
                <header class="item-header">
                  <h6 class="item-label">{{ item.label }}</h6>
                </header>
                <div class="image-wrap">
                  <nuxt-img
                    :src="item.src"
                    :alt="`${item.label} 이미지`"
                    provider="storageBucket"
                  />
                </div>
                <figcaption class="caption-benefit">
                  <p class="item-desc">
                    {{ item.content }}
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </template>
      <!-- grid 보기 타입 -->
      <template v-else>
        <div class="view-default">
          <!-- 혜택 목록 및 행동유도버튼 -->
          <div class="content-cta">
            <!-- <UAccordion color="primary" variant="soft" size="sm" :items="items">
          <template #default="{ item, index, open }"> -->
            <ul class="list-benefits">
              <li v-for="(item, i) in items" :key="i" class="list-item">
                <article class="benefit" :class="{ open: i === carouselIndex }">
                  <header class="header-benefit">
                    <button
                      @click="salt = i"
                      class="accordian-btn"
                      :class="{ open: i === carouselIndex }"
                    >
                      {{ item.label }}
                      <UIcon
                        name="ep:arrow-up-bold"
                        class="btn-icon"
                        :class="{ open: i === carouselIndex }"
                      />
                    </button>
                  </header>
                  <section class="item-collapse">
                    <div class="content-collapse">
                      <figure class="block lg:hidden border-y mb-2">
                        <nuxt-img :src="item.src" />
                      </figure>
                      {{ item.content }}
                    </div>
                  </section>
                </article>
              </li>
            </ul>

            <!-- </template> -->
            <!-- <template #item="{ item }"> -->

            <!-- </template> -->
            <!-- </UAccordion> -->
            <!-- <header class="cta-header">
          <h5>저희와 함께하시겠어요?</h5>
        </header>
        <section class="cta-body">
          <div class="body-graphic">
            <icon-info class="icon" />
          </div>
          <p class="body-desc">
            저희는 미팅을 거쳐서 스폰서 혜택을 귀사에 맞춰드릴 수 있습니다.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsa asperiores error deleniti esse obcaecati, perferendis fuga
            incidunt id dolorem iste cupiditate dolor ad aliquid excepturi
            officia eaque nemo fugit!
          </p>
        </section>
        <footer class="cta-footer">
          <nuxt-link to="/together" class="link-item">
            <span>스폰서 미팅 예약하기</span>
            <UIcon class="icon" name="bxs:paper-plane" />
          </nuxt-link>
        </footer> -->
          </div>
          <!-- 혜택 슬라이드 -->
          <div class="content-benefit hidden lg:block">
            <!-- <header class="benefit-header">
          <h5>함께하기</h5>
          <p class="content">
            사단법인 숲길의 ‘2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스
            조직위원회’는 더욱 아름답고 풍성한 행사를 만들기 위한 다양한 형태의
            협업과 후원을 환영합니다.
          </p>
        </header> -->
            <UCarousel
              :items="items"
              :ui="{
                item: 'basis-full'
              }"
              ref="carouselRef"
              class="carousel"
              arrows
              indicators
            >
              <template #default="{ item }">
                <figure class="item">
                  <nuxt-img
                    placeholder
                    provider="storageBucket"
                    :src="item.src"
                    class="item-image"
                    draggable="false"
                  />
                  <!-- <figcaption>
                <h6>{{ item.label }}</h6>
                <p>{{ item.content }}</p>
              </figcaption> -->
                </figure>
              </template>

              <template #prev="{ onClick, disabled }">
                <button
                  :disabled="disabled"
                  @click="salt -= 1"
                  class="btn prev"
                >
                  <icon-arr dir="left" color="spring-green-400" />
                </button>
              </template>

              <template #next="{ onClick, disabled }">
                <button
                  :disabled="disabled"
                  @click="salt += 1"
                  class="btn next"
                >
                  <icon-arr dir="right" color="spring-green-400" />
                </button>
              </template>

              <template #indicator="{ onClick, page, active }">
                <!-- <UButton
              :label="String(page)"
              :variant="active ? 'solid' : 'outline'"
              size="2xs"
              class="rounded-full min-w-6 justify-center"
              @click="onClick(page)"
            /> -->
                <button
                  class="indicator-btn"
                  :class="{ active: active }"
                  @click="salt = page - 1"
                ></button>
              </template>
            </UCarousel>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  viewType: {
    type: String,
    default: null
  }
});

import benefitList from "@/data/benefitList";
const items = computed(() => {
  return benefitList;
});

const carouselIndex = ref(0);
const salt = ref(0);
watch(
  () => carouselIndex.value,
  (n, o) => {
    carouselRef.value.select(n + 1);
  }
);

const carouselRef = ref();
const onPrev = e => {
  console.log("prev :", e);
};
const onNext = e => {
  console.log("next :", e);
};

watch(
  () => salt.value,
  async (n, o) => {
    // if (carouselRef?.value?.page && n !== carouselRef?.value?.page - 1) {
    carouselIndex.value = n;
    // }
  }
);
</script>

<style lang="postcss" scoped>
#sponsor-benefits {
  /* @apply */
  .content {
    /* 플렉스 보기 타입 */
    .view-flex {
      @apply container mx-auto py-14;
      .list-benefit {
        @apply flex justify-center flex-wrap -mx-4 px-4;
        .list-item {
          @apply w-6/12 md:w-4/12 lg:w-3/12 px-4 mb-6;
          .benefit {
            /* @app  */
            .item-header {
              @apply p-2 border-x border-t border-grayscale-800;
              h6.item-label {
                @apply font-bold max-lg:w-8/12;
              }
            }
            /* @apply data */
            .image-wrap {
              @apply overflow-hidden border border-grayscale-800;
            }
            .caption-benefit {
              @apply p-2 border-x border-b border-grayscale-800;
              p.item-desc {
                @apply text-sm lg:text-base;
              }
            }
          }
        }
      }
    }

    /* 그리드 보기 타입 */
    .view-default {
      @apply grid grid-cols-1 lg:grid-cols-12;
      .content-benefit {
        @apply col-span-1 lg:col-span-8 border-t lg:border-r border-grayscale-800;
        .benefit-header {
          @apply p-4 lg:py-[1.11rem] border-b border-grayscale-800 flex flex-col lg:flex-row items-start lg:items-center;
          h5 {
            @apply text-2xl lg:text-3xl font-bold mb-3 lg:mb-0 lg:mr-6 text-nowrap;
            transform: skew(-15deg);
          }
          p.content {
            @apply text-lg;
          }
        }
        .carousel {
          @apply relative;
          .item {
            @apply relative w-full max-lg:min-h-[40vh] min-h-[50rem];
            .item-image {
              @apply block absolute-center min-h-full h-full object-cover min-w-[100%];
            }
            figcaption {
              @apply text-center absolute top-0 w-full bg-white border-b border-grayscale-800;
              h6 {
                @apply text-lg lg:text-2xl font-bold py-4 px-4 border-b border-grayscale-800;
              }
              p {
                @apply py-3 px-12 text-xs lg:text-sm;
              }
            }
          }
          .indicator-btn {
            @apply rounded-none h-4 w-4 lg:w-5 lg:h-5 bg-grayscale-900;
            &.active {
              @apply bg-spring-green-400;
            }
          }

          .btn {
            @apply absolute top-[50%] translate-y-[-50%] w-10 h-10 lg:w-14 lg:h-14;

            &.prev {
              @apply left-0 lg:left-6;
            }
            &.next {
              @apply right-0 lg:right-6;
            }
          }
        }
      }
      /* 혜택 목록 및 행동유도버튼 */
      .content-cta {
        @apply col-span-1 lg:col-span-4 border-t border-grayscale-800 flex flex-col bg-grayscale-100;
        .cta-header {
          @apply px-2 py-4 lg:py-7 border-b border-gray-800 text-center text-wrap;
          h5 {
            @apply text-2xl lg:text-3xl font-bold m-0;
            transform: skew(-15deg);
          }
        }
        /* 혜택 이미지 */
        .list-benefits {
          /* @apply  */
          .list-item {
            /* @apply  */
            .benefit {
              @apply overflow-hidden;
              .header-benefit {
                @apply p-2;
                .accordian-btn {
                  @apply transition-all-default font-semibold px-4 py-2 border hover:bg-spring-green-500  bg-white border-grayscale-800 w-full flex justify-between items-start text-left;
                  .btn-icon {
                    @apply transition-all-default translate-y-1;
                  }
                  &.open {
                    @apply bg-spring-green-400 border-spring-green-400;
                    .btn-icon {
                      @apply rotate-180 translate-y-1;
                    }
                  }
                }
              }
              .item-collapse {
                @apply h-0 max-h-0 transition-all-default overflow-hidden;
                .content-collapse {
                  @apply px-3 py-4  border-b border-grayscale-800 bg-purple-heart-600 text-white;
                  /* transition-duration: 15s; */
                }
              }
              &.open {
                .item-collapse {
                  @apply h-[inherit] max-h-[100vh] lg:max-h-[10rem];
                }
              }
            }
          }
        }

        /* .cta-body {
        .body-graphic {
          @apply p-8 lg:p-12 bg-baja-white-100 border-b border-gray-800;
          .icon {
            @apply max-lg:w-5/12 max-lg:mx-auto;
          }
        }
        .body-desc {
          @apply p-5 lg:p-6;
        }
      } */

        .cta-footer {
          @apply text-center border-t border-gray-800 mt-auto;
          .link-item {
            @apply block py-[1.2rem] transition-all-default bg-spring-green-200 px-5;
            span,
            .icon {
              @apply transition-all-default text-xl lg:text-2xl font-semibold;
            }
            .icon {
              @apply lg:text-3xl ml-2;
            }
            &:hover {
              @apply bg-spring-green-500;
              span {
                transform: skew(-15deg);
              }
              .icon {
                transform: translate(8px, -8px);
              }
            }
          }
        }
      }
    }
  }
}
</style>
