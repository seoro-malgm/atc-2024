<template>
  <div id="section-subscribe">
    <header-section class="bg-white"> 워킹 페스티벌 & 컨퍼런스 </header-section>
    <!-- 내용 -->
    <section class="content">
      <!-- 티켓 1 -->
      <ticket
        :reverse="true"
        class="-mb-2 lg:-mb-12 -ml-3 lg:-ml-24 shadow-2xl w-11/12 md:w-9/12 lg:w-7/12 rotate-[-5deg] relative z-[3] animation-wiggle"
      >
        <template #body-right>
          <div
            class="h-full p-4 bg-[#01514E]"
            :style="{
              backgroundImage: `url('/images/ticket-left.png')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }"
          >
            <footer class="absolute left-4 bottom-4">
              <div
                class="border-2 rounded-3xl text-crusoer-900 border-crusoer-900 px-4 py-1 font-bold text-lg lg:text-xl"
              >
                1
              </div>
            </footer>
          </div>
        </template>
        <template #body-left>
          <section class="bg-[#FFFAE6] p-6 md:p-8 xl:p-16 h-full">
            <h6 class="text-sm md:text-3xl font-bold text-crusoer-900">
              지리산둘레길 걷기 축제 1
            </h6>
            <hr class="my-3 lg:my-3 border-1" />
            <p class="text-xs lg:text-lg text-grayscale-800">
              먹거리와 마실거리 그리고 음악이 함께하는 축제 <br />
              A festival with food, drinks, and music
            </p>
          </section>
        </template>
      </ticket>
      <!-- 티켓 2 -->
      <ticket
        class="-mr-6 lg:-mr-24 shadow-2xl w-11/12 md:w-9/12 lg:w-7/12 rotate-[-2deg] relative z-[2]"
      >
        <template #body-left>
          <article class="flex flex-col h-full justify-between">
            <section class="bg-[#FFFAE6] p-4 lg:p-16 h-full">
              <header class="flex justify-end">
                <div
                  class="border-2 rounded-3xl text-crusoer-900 border-crusoer-900 px-4 py-1 font-bold text-lg lg:text-xl"
                >
                  2
                </div>
              </header>
              <h6 class="text-sm md:text-3xl font-bold text-crusoer-900">
                지리산둘레길 <br />
                걷기 축제 2
              </h6>
            </section>
            <footer class="bg-crusoer-900 text-white px-4 py-2 text-sm">
              2024 Jirisan Trail Walking Festival 2
            </footer>
          </article>
        </template>
        <template #body-right>
          <img
            src="/images/dummy.jpeg"
            alt="ticket image"
            class="object-cover h-full absolute-center"
          />
        </template>
      </ticket>
      <!-- 티켓 3 -->
      <ticket
        :reverse="true"
        class="-ml-3 lg:-ml-40 lg:-mt-10 shadow-lg w-11/12 md:w-9/12 lg:w-7/12 rotate-[4deg] relative z-[1]"
      >
        <template #body-right>
          <img
            src="/images/dummy.jpeg"
            alt="ticket image"
            class="object-cover h-full absolute-center"
          />
        </template>
        <template #body-left>
          <article class="flex flex-col h-full justify-between">
            <section class="bg-[#FFFAE6] p-4 lg:p-16 h-full">
              <header class="flex justify-end">
                <h6 class="text-sm md:text-3xl font-bold text-crusoer-900">
                  제 5회 아시아 트레일즈 컨퍼런스 (ATC)
                </h6>
              </header>
            </section>
            <footer class="bg-crusoer-900 text-white px-4 py-2 text-sm">
              5th ASIA TRAILS CONFERENCE (ATC) 2024
            </footer>
          </article>
        </template>
      </ticket>
      <!-- 정보텍스트 -->
      <!-- <footer class="container mx-auto">
        <ul class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white">
          <li class="px-4">
            <header class="pt-3 pb-4 border-b border-white">
              <h5 class="text-lg lg:text-xl font-bold">
                10/25 (금) 제 5회 아시아 트레일즈 컨퍼런스 (ATC)
              </h5>
            </header>
            <ul class="py-2">
              <li class="grid grid-cols-12 mb-2">
                <span class="col-span-4">00:00 - 00:00</span>
                <span class="col-span-8">자세한 일정 공개 예정</span>
              </li>
            </ul>
          </li>
          <li class="px-4">
            <header class="pt-3 pb-4 border-b border-white">
              <h5 class="text-lg lg:text-xl font-bold">
                10/26 (토) 2024 지리산둘레길 걷기축제 1
              </h5>
            </header>
            <ul class="py-2">
              <li class="grid grid-cols-12 mb-2">
                <span class="col-span-4">09:00 - 16:00</span>
                <span class="col-span-8">2024 지리산둘레길 걷기축제 1</span>
              </li>
              <li class="grid grid-cols-12 mb-2">
                <span class="col-span-4">16:00- 19:00</span>
                <span class="col-span-8"
                  >로컬 페스티벌 - 플리마켓, 지역주축제, 버스킹공연 등</span
                >
              </li>
              <li class="grid grid-cols-12 mb-2">
                <span class="col-span-4">19:00 - 21:00</span>
                <span class="col-span-8">네트워킹 파티</span>
              </li>
            </ul>
          </li>
          <li class="px-4">
            <header class="pt-3 pb-4 border-b border-white">
              <h5 class="text-lg lg:text-xl font-bold">
                10/27 (일) 2024 지리산둘레길 걷기축제 2
              </h5>
            </header>
            <ul class="py-2">
              <li class="grid grid-cols-12 mb-2">
                <span class="col-span-4">10:00- 16:00</span>
                <span class="col-span-8">2024 지리산둘레길 걷기축제 2</span>
              </li>
              <li class="grid grid-cols-12 mb-2">
                <span class="col-span-4">18:00- 20:00</span>
                <span class="col-span-8">송별회</span>
              </li>
            </ul>
          </li>
        </ul>
      </footer> -->
    </section>
    <footer class="text-center px-4 max-md:-mt-[24rem] md:-mt-24">
      <span class="lg:text-xl">
        워킹 페스티벌과 컨퍼런스의 자세한 일정은 공개 예정입니다. <br />
        소식을 미리 구독하시면 빠르게 확인하실 수 있습니다.
      </span>
    </footer>
    <!-- cta -->
    <section class="cta">
      <button @click.prevent="sbuscribeModalShown = true" class="btn-cta">
        <span> 소식 구독하기 </span>
        <UIcon class="icon -mt-4" name="bxs:paper-plane" />
      </button>
    </section>

    <!-- modals -->
    <modal-subscribe
      :shown="sbuscribeModalShown"
      @toggle="$event => (sbuscribeModalShown = $event)"
    />
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

// 구독 폼 열기
const sbuscribeModalShown = ref(false);
</script>

<style lang="postcss" scoped>
#section-subscribe {
  @apply pb-24;
  /* 내용 */
  section.content {
    @apply mx-auto min-h-screen pt-16 lg:pt-24 flex flex-col items-center;
  }
  /* cta */
  section.cta {
    @apply sticky bottom-0 px-3 text-center z-10 pb-12 mt-8;
    .btn-cta {
      @apply py-3 px-6 lg:py-4 lg:px-10 bg-spring-green-300 shadow-xl relative rounded-lg;
      span,
      .icon {
        @apply inline-block transition-all-default font-semibold text-2xl lg:text-3xl;
      }
      &:hover {
        span {
          transform: skew(-15deg);
        }
        .icon {
          transform: translate(4px, -4px);
        }
      }
    }
  }
}

@keyframes toggle {
  0% {
    transform: rotate(3deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
  85% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animation-wiggle {
  @apply transition-all-default;
  animation: toggle 0.8s alternate infinite cubic-bezier(0.86, 0, 0.07, 1);
  /* animation-delay: 2s; */
  animation-range-end: 2s;
}
</style>
