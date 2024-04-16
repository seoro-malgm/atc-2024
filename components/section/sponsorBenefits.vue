<template>
  <div id="sponsor-benefits">
    <header-section class="-my-[1px]"> 스폰서 혜택 </header-section>
    <div class="content">
      <div class="content-cta">
        <UAccordion color="primary" variant="soft" size="sm" :items="items">
          <template #default="{ item, index, open }">
            <button
              @click="carouselIndex = index"
              class="border-b border-grayscale-800 transition-all-default text-bold text-lg px-4 py-2 font-bold hover:bg-spring-green-200"
              :class="open ? 'bg-spring-green-400' : 'bg-white'"
            >
              {{ item.label }}
            </button>
          </template>
          <template #item="{ item }">
            <div
              class="mt-0 px-3 py-4 border-b border-grayscale-800 bg-purple-heart-600 text-white"
            >
              <!-- carouselIndex: {{ carouselIndex }} -->
              {{ item.content }}
            </div>
          </template>
        </UAccordion>
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
      <div class="content-benefit">
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
        >
          <!-- indicators -->
          <!-- arrows -->
          <template #default="{ item }">
            <figure class="item">
              <nuxt-img
                placeholder
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
            <button :disabled="disabled" @click="onClick" class="btn prev">
              <icon-arr dir="left" color="spring-green-400" />
            </button>
          </template>

          <template #next="{ onClick, disabled }">
            <button :disabled="disabled" @click="onClick" class="btn next">
              <icon-arr dir="right" color="spring-green-400" />
            </button>
          </template>
        </UCarousel>
      </div>
    </div>
  </div>
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
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "컨퍼런스 스피치 세션 발표",
    defaultOpen: true,
    content:
      "최대 20분간 세션을 발표할 수 있습니다. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "컨퍼런스 세션 중간 기업 광고 영상 송출",
    content:
      "짧고 강하게, 중간광고를 송출 가능 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "컨퍼런스 책자 내 기업 광고 (국/영문)",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "걷기축제 시작점 / 종점 부스",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "걷기축제 공식 홍보 영상 내 제품 노출",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "걷기축제 프로그램 가이드 내 기업 광고  (국/영문)",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "기업 제품 증정품 지급(굿즈 패키지)",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "기업 로고 노출 위치",
    content:
      "참여자 등번호, 현수막,스탠딩배너, 포스터, 웹사이트 등에 브랜드를 홍보하세요"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "사전 마케팅 캠페인 공동 제작",
    content:
      "ATC를 홍보하는 마케팅의 초입부터 함께 공동으로 제작에 참여하실 수 있습니다."
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "지리산둘레길 공식 안내 책자 내 기업 광고",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://atc-2024-one.vercel.app/images/dummy.jpeg",
    label: "지리산둘레길 환경 프로그램 공동 제작 & 공동마케팅 (2024년 중)",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  }
];

const carouselIndex = ref(0);
watch(
  () => carouselIndex.value,
  (n, o) => {
    carouselRef.value.select(n + 1);
  }
);

const carouselRef = ref();

// watch(
//   () => carouselRef?.value?.page,
//   (n, o) => {
//     // carouselIndex.value = n - 1;
//     console.log("carouselIndex.value, n :", carouselIndex.value, n);
//     if (
//       carouselRef?.value?.page &&
//       carouselIndex.value !== carouselRef?.value?.page - 1
//     ) {
//       carouselIndex.value = carouselRef.value.page - 1;
//     }
//   }
// );
// onMounted(() => {
// setInterval(() => {
//   if (!carouselRef.value) return;

//   if (carouselRef.value.page === carouselRef.value.pages) {
//     return carouselRef.value.select(0);
//   }

//   carouselRef.value.next();
// }, 3000);
// });
</script>

<style lang="postcss" scoped>
#sponsor-benefits {
  /* @apply */
  .content {
    @apply grid grid-cols-1 lg:grid-cols-12;
    .content-benefit {
      @apply col-span-1 lg:col-span-9 border-t lg:border-r border-grayscale-800;
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
          @apply relative w-full max-lg:min-h-[40vh] min-h-[45rem];
          .item-image {
            @apply block absolute-center min-h-full h-full w-auto object-cover;
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
    .content-cta {
      @apply col-span-1 lg:col-span-3 border-t lg:border-r border-grayscale-800 flex flex-col bg-grayscale-200;
      .cta-header {
        @apply px-2 py-4 lg:py-7 border-b border-gray-800 text-center text-wrap;
        h5 {
          @apply text-2xl lg:text-3xl font-bold m-0;
          transform: skew(-15deg);
        }
      }
      .cta-body {
        .body-graphic {
          @apply p-8 lg:p-12 bg-baja-white-100 border-b border-gray-800;
          .icon {
            @apply max-lg:w-5/12 max-lg:mx-auto;
          }
        }
        .body-desc {
          @apply p-5 lg:p-6;
        }
      }
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
</style>
