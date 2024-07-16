<template>
  <section id="section-introduction">
    <!-- <header class="section-header">
      <h4>컨퍼런스 소개</h4>
    </header> -->
    <header-section v-if="!hideHeader">
      {{ $t("main_intro__title") }}
    </header-section>
    <div class="section-body">
      <ul class="list-infos">
        <li v-for="(item, i) in items" :key="i" class="list-item">
          <article class="item">
            <figure class="item-thumbnail">
              <nuxt-img
                :src="item.src"
                provider="defaultProvider"
                class="w-full aspect-video"
                :alt="`program image ${i + 1}`"
              />
            </figure>
            <figcaption class="item-caption">
              <span class="subtitle">
                {{ $t(item.subtitle) }}
              </span>
              <h6 class="title">
                {{ $t(item.title) }}
              </h6>
              <p class="desc">
                {{ $t(item.desc) }}
              </p>
            </figcaption>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  hideHeader: {
    type: Boolean,
    default: false
  }
});
const emits = defineEmits();

const items = reactive([
  {
    src: "/images/introduction/item_0.png",
    subtitle: "main_intro_item01_title",
    title: "main_intro_item01_subtitle",
    desc: "main_intro_item01_desc"
  },
  {
    src: "/images/introduction/item_1.png",
    subtitle: "main_intro_item02_title",
    title: "main_intro_item02_subtitle",
    desc: "main_intro_item02_desc"
  },
  {
    src: "/images/introduction/item_2.png",
    subtitle: "main_intro_item02_title",
    title: "main_intro_item02_subtitle",
    desc: "main_intro_item02_desc"
  }
]);
</script>

<style lang="postcss" scoped>
#section-introduction {
  @apply mb-32 lg:mb-24;
  /* 헤더 */
  .section-header {
    @apply pt-3 pb-3 px-12 text-center;
  }

  /* 내용 */
  .section-body {
    @apply px-4 lg:px-12 mx-auto mt-24;
  }
  .list-infos {
    @apply grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 px-4 mx-auto;
    .list-item {
      .item {
        @apply border-b border-grayscale-800 pb-12;
        .item-thumbnail {
        }
        .item-caption {
          @apply px-4 pt-8 pb-2;
          .subtitle {
            @apply font-bold text-lg lg:text-xl;
          }
          .title {
            @apply mt-3 mb-6 text-3xl lg:text-4xl font-bold;
          }
          .desc {
            @apply font-semibold text-base lg:text-lg;
          }
        }
      }
    }
  }
}
</style>
