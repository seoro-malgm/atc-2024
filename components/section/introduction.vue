<template>
  <section id="section-introduction">
    <!-- <header class="section-header">
      <h4>컨퍼런스 소개</h4>
    </header> -->
    <header-section v-if="!hideHeader"> 컨퍼런스 소개 </header-section>
    <div class="section-body">
      <ul class="list-infos">
        <li v-for="(item, i) in items" :key="i" class="list-item">
          <article class="item">
            <figure class="item-thumbnail">
              <nuxt-img
                :src="item.src"
                provider="defaultProvider"
                class="w-full aspect-video"
                :alt="`${item.title} 이미지`"
              />
            </figure>
            <figcaption class="item-caption">
              <span class="subtitle">
                {{ item.subtitle }}
              </span>
              <h6 class="title">
                {{ item.title }}
              </h6>
              <p class="paragraph">
                {{ item.paragraph }}
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
    subtitle: "전 세계 트레일 관계자와 함께 만드는",
    title: "걷기로 실현되어야 할 미래",
    paragraph:
      "생물 다양성 보존과 기후 위기를 대응하기 위한 트레일 운영관리, 사회적 약자를 배려한 트레일 프로그램, 민관·국제협력 정책을 논의합니다."
  },
  {
    src: "/images/introduction/item_1.png",
    subtitle: "아시아 트레일즈 네트워크와",
    title: "아시아 트레일즈 컨퍼런스",
    paragraph:
      "아시아권 트레일 운영관리 주체들의 정보교류·협력을 위해 ATN이  발족 되었으며, 제5회 ATC를  사단법인 숲길과 함께 지리산에서 개최합니다."
  },
  {
    src: "/images/introduction/item_2.png",
    subtitle: "사단법인 숲길과",
    title: "지리산둘레길",
    paragraph:
      "지리산을 등정의 대상이 아닌 다양한 생명들의 터전으로 유지하기 위해 2007년 사단법인 숲길이 설립되어 지리산둘레길을 운영하고 있습니다."
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
            @apply mt-3 mb-6 text-3xl lg:text-5xl font-bold;
          }
          .paragraph {
            @apply font-semibold text-base lg:text-xl;
          }
        }
      }
    }
  }
}
</style>
