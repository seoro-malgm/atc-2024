<template>
  <div id="sponsor-benefits">
    <div class="content">
      <div class="content-benefit">
        <header class="benefit-header">
          <h5>함께하기</h5>
          <p class="description">
            사단법인 숲길의 ‘2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스
            조직위원회’는 더욱 아름답고 풍성한 행사를 만들기 위한 다양한 형태의
            협업과 후원을 환영합니다.
          </p>
        </header>
        <UCarousel
          :items="items"
          :ui="{
            item: 'basis-full'
          }"
          arrows
          ref="carouselRef"
          class="carousel"
        >
          <template #default="{ item }">
            <figure class="item">
              <img :src="item.src" class="item-image" draggable="false" />
              <figcaption>
                <h6>{{ item.title }}</h6>
                <p>{{ item.description }}</p>
              </figcaption>
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
      <div class="content-cta">
        <header class="cta-header">
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
  {
    src: "https://picsum.photos/1920/1080?random=2",
    title:
      "2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스를 후원하는 이유는 무엇입니까?",
    description:
      "파트너 후원은 사단법인 숲길이 지리산 환경을 보호하고 다양한 사회공헌 프로그램들을 풍성하게 운영할 수 있도록 도와줍니다. 환경보호와 사회공헌활동을 중요한 미션으로 여기는 소중한 파트너들의 후원, 지원 및 협업으로 숲길의 이러한 노력이 꽃을 피울 수 있었습니다."
  },
  {
    src: "https://picsum.photos/1920/1080?random=3",
    title: "누가 참가하게 될까요?",
    description:
      "숲길은 아름다운 지리산의 자연을 다음 세대에게 그대로 물려주기 위하여 여러 단체, 기업, 공공기관 및 이해관계자들과 긴밀히 협업해왔습니다. 우리는 이러한 파트너들의 소중한 지원에 깊은 감사를 표합니다."
  },
  {
    src: "https://picsum.photos/1920/1080?random=4",
    title:
      "2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스는 친환경적으로 진행되나요?",
    description:
      "사단법인 숲길이 가장 중요하게 생각하는 것은 우리가 행하는 모든 행위가 자연에 해를 끼치지 않는 방향으로 이루어져야 한다는 점입니다. 이번 행사 또한 다르지 않습니다. 우리가 어떻게 친환경적으로 행사를 만들어 나가는지 함께 지켜봐주세요!"
  },
  {
    src: "https://picsum.photos/1920/1080?random=5",
    title: "함께하기",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  },
  {
    src: "https://picsum.photos/1920/1080?random=6",
    title: "함께하기",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"
  }
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
        .item {
          .item-image {
            @apply w-full;
          }
          figcaption {
            @apply text-center;
            h6 {
              @apply text-2xl font-bold py-2 border-b border-grayscale-800;
            }
            p {
              @apply py-3 px-12;
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
      @apply col-span-1 lg:col-span-3 border-t border-grayscale-800 flex flex-col;
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
