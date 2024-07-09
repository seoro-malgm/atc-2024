<template>
  <div id="section-programs">
    <header class="section-header">
      <div class="w-16 h-16 lg:w-28 lg:h-28 mb-2">
        <icon-paper addClass="fill-grayscale-900" />
      </div>
      <h2 class="title">부대행사 (10.25~27)</h2>
      <p class="desc">
        컨퍼런스 외에도 다양한 부대행사들이 3일간 진행되니 많은 관심
        부탁드립니다.
      </p>
    </header>
    <section class="py-5 ms-auto">
      <!-- 프로그램 윗줄 -->
      <section-marquee-custom :height="`${marqueeHeight}px`" duration="12s">
        <ul class="list-programs" ref="list">
          <li class="item-program" v-for="(item, i) in items" :key="i">
            <figure class="thumbnail-wrapper">
              <div class="thumbnail">
                <!-- Add your thumbnail content here -->
              </div>
            </figure>

            <div class="program-info">
              <div class="program-text">
                <h6 class="program-title">
                  {{ item.title }}
                </h6>
                <p class="program-description">
                  {{ item.date }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section-marquee-custom>

      <!-- 프로그램 아랫줄 -->
      <section-marquee-custom
        class="mt-4"
        :height="`${marqueeHeight}px`"
        direction="reverse"
        duration="12s"
      >
        <ul class="list-programs" ref="list">
          <li class="item-program" v-for="(item, i) in items" :key="i">
            <figure class="thumbnail-wrapper">
              <div class="thumbnail">
                <!-- Add your thumbnail content here -->
              </div>
            </figure>

            <div class="program-info">
              <div class="program-text">
                <h6 class="program-title">
                  {{ item.title }}
                </h6>
                <p class="program-description">
                  {{ item.date }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section-marquee-custom>
    </section>
  </div>
</template>

<script setup>
import { useElementBounding } from "@vueuse/core";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emits = defineEmits();

const list = ref(null);
const listBounding = useElementBounding(list);
const marqueeHeight = computed(() => {
  return Number(listBounding.height.value);
});

const items = reactive([
  { title: "지리산 최대 규모의 걷기 축제", date: "2024.10.26." },
  { title: "지역 술과 음식을 즐기는 뮤직 페스티벌", date: "2024.10.26." },
  { title: "6지역 6색의 걷기 프로그램", date: "2024.10.27." },
  { title: "숙박 및 교통 연계 프로그램", date: "2024.10.25. ~ 2024.10.27." },
  { title: "2024년 한정 지리산둘레길 굿즈", date: null },
  { title: "찐 지리산둘레길 팬들이 모여 지리산둘레길 이야기하기", date: null }
]);
</script>

<style lang="postcss" scoped>
#section-programs {
  @apply pt-24 pb-48 bg-grayscale-200 border-t border-grayscale-800;
  .section-header {
    @apply container mx-auto text-left mb-4 lg:mb-10 px-2;
    .title {
      @apply text-3xl lg:text-5xl font-bold px-4 mb-2;
    }
    p.desc {
      @apply text-lg lg:text-2xl px-4;
    }
  }
}

.list-programs {
  @apply inline-flex flex-nowrap whitespace-nowrap mx-4;
  .item-program {
    @apply bg-white border border-grayscale-800 me-12;
    .thumbnail-wrapper {
      @apply mb-4 border border-gray-800 m-4;
      .thumbnail {
        @apply h-48 bg-gray-200 bg-center bg-cover;
      }
    }

    .program-info {
      @apply flex justify-between min-w-[320px] max-w-[400px] px-4 pb-4;
      .program-text {
        @apply me-4;
        .program-title {
          @apply text-xl font-semibold mb-2 text-wrap;
        }

        .program-description {
          @apply text-gray-600;
        }
      }
    }
  }
}
</style>