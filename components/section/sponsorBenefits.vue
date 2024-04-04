<template>
  <div id="sponsor-benefits">
    <div class="content">
      <div class="content-benefit">
        <header class="benefit-header">
          <h5>스폰서 혜택</h5>
          <p class="description">
            저희와 함께할때 누릴 수 있는 혜택들입니다 Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Libero dolor eum fuga
            accusantium, nulla ipsam eligendi id accusamus ratione harum!
          </p>
        </header>
        <UCarousel
          :items="items"
          :ui="{
            item: 'basis-full'
          }"
          arrows
          indicators
          ref="carouselRef"
          class="carousel"
        >
          <template #default="{ item }">
            <img :src="item" class="w-full" draggable="false" />
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
      <div class="content-cta">
        <header class="cta-header">
          <h5>저희와 함께하시겠어요?</h5>
        </header>
        <section class="cta-body">
          <div class="body-graphic">
            <icon-info />
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
            <span>혜택 자세히 보고 미팅 예약하기</span>
            <UIcon class="icon" name="bxs:paper-plane" />
          </nuxt-link>
        </footer>
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
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6"
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
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
        p.description {
          @apply text-lg;
        }
      }
      .carousel {
        @apply relative;
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
      @apply col-span-1 lg:col-span-3 border-t border-grayscale-800;
      .cta-header {
        @apply px-4 py-4 lg:py-7 border-b border-gray-800 text-center;
        h5 {
          @apply text-2xl lg:text-3xl font-bold mb-3 lg:mb-0 lg:mr-6 text-nowrap;
          transform: skew(-15deg);
        }
      }
      .cta-body {
        .body-graphic {
          @apply p-8 lg:p-12 bg-baja-white-100 border-b border-gray-800;
        }
        .body-desc {
          @apply p-5 lg:p-6;
        }
      }
      .cta-footer {
        @apply text-center border-t border-gray-800;
        .link-item {
          @apply block py-[1.2rem] transition-all-default bg-spring-green-200;
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
