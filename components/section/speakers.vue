<template>
  <section id="section-speakers" ref="target">
    <header-section>{{ $t("speaker_subject__title") }}</header-section>
    <div class="mt-12 mx-auto">
      <ul class="list-speaker">
        <li v-for="(item, i) in items" :key="item.id" class="list-item">
          <button
            @click="selected = item"
            @mouseenter="itemHovered = true"
            @mouseleave="itemHovered = false"
          >
            <figure class="speaker">
              <nuxt-img
                :src="`/images/speakers/${item.id}.png`"
                provider="defaultProvider"
                class="image"
              />
              <div class="dim" />
            </figure>
            <figcaption>
              <h6>
                {{ $t(item.name) }}
              </h6>
            </figcaption>
          </button>
        </li>
      </ul>
      <div class="info">
        <div class="sign">
          <h6>
            {{ $t("message_infos_speakers_comming_soon") }}
          </h6>
        </div>
      </div>
    </div>
    <div
      class="cursor"
      v-if="!isOutside"
      :class="itemHovered ? '' : 'blur-lg'"
      :style="{
        width: itemHovered ? '80px' : '144px',
        height: itemHovered ? '80px' : '144px',
        top: `${elementY}px`,
        left: `${elementX}px`
      }"
    >
      <span
        class="text"
        :class="itemHovered ? 'block w-auto h-auto' : 'hidden w-0 h-0'"
      >
        VIEW
      </span>
    </div>
    <modal-speaker :selected="selected" @close="selected = null" />
  </section>
</template>

<script setup>
import spkeakerList from "@/data/speakerList.json";
const target = ref();
const { elementX, elementY, isOutside } = useMouseInElement(target);

const itemHovered = ref(false);
const selected = ref();
// const emits = defineEmits();

const items = computed(() => {
  return spkeakerList?.filter(item => item?.image);
});
</script>

<style lang="postcss" scoped>
#section-speakers {
  @apply pb-16 bg-[#020802] border-t border-grayscale-900 text-white relative transition-all;
  .list-speaker {
    @apply flex flex-row flex-wrap lg:flex-nowrap w-full justify-center;
    .list-item {
      @apply lg:-mx-12 w-6/12 lg:w-3/12;
      /* 연사 */
      figure.speaker {
        @apply relative;
        .image {
          @apply saturate-0 transition-all-default mx-auto;
        }
        .dim {
          @apply absolute-center z-[2] w-full h-full block;
          background: linear-gradient(to top, #020802 0%, transparent 40%);
          content: "";
        }
        + figcaption {
          @apply w-full text-center;
          h6 {
            @apply text-xl lg:text-2xl font-bold;
          }
        }
        &:hover {
          @apply cursor-help;
          .image {
            @apply saturate-50;
          }
        }
      }
    }
  }
  /* 연사 외 사인 */
  .info {
    @apply p-2 w-full mt-12 lg:mt-20;
    .sign {
      @apply w-full  text-center;
      h6 {
        @apply text-2xl lg:text-3xl py-1;
      }
    }
  }
}

.cursor {
  @apply w-12 h-12 rounded-full bg-grayscale-100 -translate-x-1/2 -translate-y-1/2 z-[2] absolute pointer-events-none text-[#020802]  mix-blend-lighten opacity-70;
  transition: width, height 0.1s ease-in-out;
  .text {
    @apply text-base absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3;
    font-weight: 300;
  }
}
</style>
