<template>
  <!-- ATC 정보 -->
  <div class="section-infos" ref="target">
    <header class="header-infos">
      <h1>
        <strong>5th</strong>
        ASIA TRAILS CONFERENCE <strong> 2024 </strong>
        <strong> 아시아트레일즈컨퍼런스 지리산 </strong>
      </h1>
    </header>
    <div class="content-wrap">
      <ul class="list-infos">
        <li class="list-item border-y">
          <!-- <h2 class="title"> -->
          <p class="description">
            안녕하세요, 사단법인 숲길입니다. <br />
            <br />
            10월 25일, 지리산둘레길에서 개최되는 <br />
            <strong>
              제 5회 아시아 트레일즈 컨퍼런스에 여러분을 초대합니다!
            </strong>
            <br />
            <br />
            대한민국 최대의 탄소 저장고이자, 최다 생물종을 보유한 지리산.
            사단법인 숲길은 지난 17년간 지리산둘레길을 우직하고 섬세하게 가꾸며,
            지리산 권역의 로컬 커뮤니티에 기여하는 사회공헌활동을 펼쳐 왔습니다.
            <br /><br />
            제 5회 아시아 트레일즈 컨퍼런스는 <br />
            <strong> [걷기로 실현되어야 할 미래] </strong>
            를 주제로 각 분야의 전문가 들과 함께 합니다. 컨퍼런스 이후 양 일간
            펼쳐지는 지리산둘레길 걷기축제 및 다양한 부대행 사에도 많은 참여
            바랍니다
          </p>
          <!-- </h2> -->
        </li>
        <li class="list-item xl:col-span-2 border-t">
          <ol class="list-dates">
            <li class="list-item">
              <div class="grid grid-cols-12 gap-2">
                <div
                  class="col-span-4 lg:col-span-2 border-r border-spring-green-300 p-4 xl:p-8"
                >
                  <icon-paper addClass="fill-spring-green-300" />
                </div>
                <div class="col-span-8 lg:col-span-10 p-4 xl:p-8">
                  <div class="date">2024. 10. 24.</div>
                  <div class="content">
                    아시아 트레일즈 네트워크 (ATN) 정기 총회
                  </div>
                </div>
              </div>
            </li>
            <li class="list-item">
              <div class="grid grid-cols-12 gap-2">
                <div
                  class="col-span-4 lg:col-span-2 border-r border-spring-green-300 p-4 xl:p-8"
                >
                  <icon-forest addClass="fill-spring-green-300" />
                </div>
                <div class="col-span-8 lg:col-span-10 p-4 xl:p-8">
                  <div class="date">2024. 10. 25.</div>
                  <div class="content">
                    제 5회 아시아 트레일즈 컨퍼런스 (ATC)
                  </div>
                </div>
              </div>
            </li>
            <li class="list-item">
              <div class="grid grid-cols-12 gap-2">
                <div
                  class="col-span-4 lg:col-span-2 border-r border-spring-green-300 p-4 xl:p-8"
                >
                  <icon-forest addClass="fill-spring-green-300" />
                </div>
                <div class="col-span-8 lg:col-span-10 p-4 xl:p-8">
                  <div class="date">2024. 10. 26. - 10. 27.</div>
                  <div class="content">
                    2024 지리산둘레길 걷기축제 및 부대행사 ATC
                  </div>
                </div>
              </div>
            </li>
            <li class="list-item">
              <div class="grid grid-cols-12 gap-2">
                <div
                  class="col-span-4 lg:col-span-2 border-r border-spring-green-300 p-4 xl:p-8"
                >
                  <icon-map addClass="fill-spring-green-300" />
                </div>
                <div class="col-span-8 lg:col-span-10 p-4 xl:p-8 place">
                  <nuxt-link
                    to="https://maps.app.goo.gl/QSXftoUeAHTEkygJ8"
                    target="_blank"
                  >
                    <strong
                      >전라남도 구례군 더케이 지리산가족호텔 그랜드볼룸</strong
                    >
                  </nuxt-link>
                  <span> (전라남도 구례군 산동면 지리산온천로 317) </span>
                </div>
              </div>
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <logo-symbol-text
      class="symbol -top-6 -left-6 w-[70vw] lg:w-[45vw]"
      add-class="fill-white opacity-20"
      :style="{
        transform: `translate(${mousePosition.x * 0.02}px, ${
          mousePosition.y * 0.03
        }px)`
      }"
    />
    <logo-symbol-arr
      class="symbol -right-2 -bottom-2 w-[55vw] lg:w-[20vw]"
      add-class="fill-white opacity-20"
      :style="{
        transform: `translate(${-mousePosition.x * 0.02}px, ${
          -mousePosition.y * 0.03
        }px)`
      }"
    />
    <!-- mousePosition: {{ mousePosition.x * 0.3 }} -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const target = ref();

const { elementX, elementY } = useMouseInElement(target);

const mousePosition = computed(() => {
  return {
    x: elementX.value,
    y: elementY.value
  };
});
</script>

<style lang="postcss" scoped>
.section-infos {
  @apply bg-purple-heart-600 text-white py-12 relative overflow-hidden;
  .header-infos {
    @apply lg:py-8 px-8 text-center;
    h1 {
      @apply text-3xl lg:text-3xl xl:text-4xl;
      strong {
        @apply font-bold;
      }
    }
  }
  .content-wrap {
    @apply flex items-center justify-center max-xl:pb-14 p-6 xl:p-8;
    .list-infos {
      @apply grid xl:grid-cols-3 gap-8;
      > .list-item {
        @apply max-xl:border-y xl:border-x border-spring-green-300;
        /* 타이틀 */
        /* h2.title {
          @apply text-3xl lg:text-5xl p-6 xl:p-12;
        } */
        p.description {
          @apply lg:text-2xl p-8;
          line-height: 1.4;
        }
        /* 시간정보 */
        .list-dates {
          > .list-item {
            @apply border-b border-spring-green-300;
            .date {
              @apply text-xl lg:text-5xl font-bold mb-1 lg:mb-4 text-spring-green-300 leading-8 mt-1;
              letter-spacing: -0.3px;
            }
            .content {
              @apply text-lg lg:text-4xl font-semibold;
            }
          }
          /* 장소 정보 */
          .place {
            @apply border-spring-green-300 text-2xl lg:text-4xl;
            strong {
              @apply py-1 border-spring-green-300 text-spring-green-300;
              &:hover {
                @apply underline;
              }
            }
            span {
              @apply text-xl lg:text-3xl block text-white mt-2;
            }
          }
        }
      }
    }
  }
  *::selection {
    background-color: #292929 !important;
  }

  .symbol {
    @apply absolute;
    transition: transform 0.12s ease-out;
    pointer-events: none;
  }
}
</style>
