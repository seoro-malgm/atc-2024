<template>
  <div id="section-programs">
    <header class="section-header">
      <div class="w-16 h-16 lg:w-28 lg:h-28 mb-2">
        <icon-paper addClass="fill-grayscale-900" />
      </div>
      <h2 class="title">
        {{ $t("main_event__title") }}
      </h2>
      <p class="desc">
        {{ $t("main_event__desc01") }}
      </p>
    </header>
    <!-- 예약오픈 후 삭제 -->
    <!-- <section class="py-5 ms-auto">
      <section-marquee-custom :height="`${marqueeHeight}px`" duration="50s">
        <ul class="list-programs" ref="list">
          <li
            class="item-program"
            v-for="(item, i) in [
              ...programList,
              ...programList,
              ...programList,
              ...programList,
              ...programList,
              ...programList
            ]"
            :key="i"
          >
            <figure class="thumbnail-wrapper">
              <div class="thumbnail">
                <nuxt-img :src="item.src" provider="defaultProvider" />
              </div>
            </figure>

            <div class="program-info">
              <div class="program-text">
                <h6 class="program-title">
                  {{ $t(item.title) }}
                </h6>
                <p class="program-description">
                  {{ item.date }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section-marquee-custom>

      <section-marquee-custom
        class="mt-4"
        :height="`${marqueeHeight}px`"
        direction="reverse"
        duration="50s"
      >
        <ul class="list-programs" ref="list">
          <li
            class="item-program"
            v-for="(item, i) in [
              ...programList,
              ...programList,
              ...programList,
              ...programList,
              ...programList,
              ...programList
            ]"
            :key="i"
          >
            <figure class="thumbnail-wrapper">
              <div class="thumbnail">
                <nuxt-img :src="item.src" provider="defaultProvider" />
              </div>
            </figure>

            <div class="program-info">
              <div class="program-text">
                <h6 class="program-title">
                  {{ $t(item.title) }}
                </h6>
                <p class="program-description">
                  {{ item.date }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section-marquee-custom>
      <div class="section-footer"></div>
    </section> -->

    <div class="container">
      <!-- 걷기축제 섹션 -->
      <section-festival></section-festival>
      <!-- 지리산 숲길 탐험단 섹션 -->
      <!-- <section-tour></section-tour> -->
    </div>
  </div>
</template>

<script setup>
import { useElementBounding } from "@vueuse/core";
import programList from "@/data/programList";

const list = ref(null);
const listBounding = useElementBounding(list);
const marqueeHeight = computed(() => {
  return Number(listBounding.height.value);
});
</script>

<style lang="postcss" scoped>
#section-programs {
  @apply pt-24 pb-32 bg-grayscale-200;
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
        @apply aspect-video relative overflow-hidden;
        img {
          @apply absolute-center  w-full h-auto min-h-full;
        }
      }
    }

    .program-info {
      @apply flex justify-between min-w-[320px] max-w-[400px] px-4 pb-4;
      .program-text {
        @apply me-4;
        .program-title {
          @apply text-xl font-semibold mt-2 mb-1 text-wrap;
        }

        .program-description {
          @apply text-gray-600;
        }
      }
    }
  }
}
</style>
