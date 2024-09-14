<template>
  <section id="section-speakers" ref="target">
    <header-section>{{ $t("speaker_subject__title") }}</header-section>
    <div class="mt-12 mx-auto container">
      <ul class="list-speaker">
        <li v-for="(item, i) in items" :key="item.id" class="list-item">
          <button
            @click="selected = item"
            @mouseenter="itemHovered = true"
            @mouseleave="itemHovered = false"
            class="w-full"
          >
            <figure class="speaker">
              <!-- 연사 인물 이미지 -->
              <nuxt-img
                :src="`/images/speakers/${item.thumbnail}`"
                provider="defaultProvider"
                class="image"
                v-if="item?.thumbnail"
              />
              <div class="dim" />
            </figure>
            <figcaption>
              <!-- 연사이름 -->
              <h6>
                {{ $t(`${item.id}_name`) }}
              </h6>
              <span> ({{ $t(`${item.id}_name_en`) }}) </span>
              <ul class="info-list">
                <li v-if="$t(`${item.id}_company`) !== ''">
                  {{ $t(`${item.id}_company`) }}
                </li>
                <li v-if="$t(`${item.id}_position`) !== ''">
                  {{ $t(`${item.id}_position`) }}
                </li>
              </ul>
            </figcaption>
          </button>
        </li>
      </ul>
      <!-- <div class="info">
        <div class="sign">
          <h6>
            {{ $t("message_infos_speakers_comming_soon") }}
          </h6>
        </div>
      </div> -->
    </div>
    <!-- view more  -->
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
  return spkeakerList?.filter(item => item?.image && !item?.hidden);
});
</script>

<style lang="postcss" scoped>
#section-speakers {
  @apply pb-16 bg-[#020802] border-t border-grayscale-900 text-white relative transition-all overflow-hidden;
  .list-speaker {
    @apply flex flex-row items-center flex-wrap w-full justify-center px-4 lg:px-6;
    .list-item {
      @apply w-1/2 lg:w-3/12 max-lg:mb-6;
      /* 연사 */
      figure.speaker {
        @apply relative w-full;
        .image {
          @apply saturate-0 transition-all-default h-auto w-full m-auto;
        }
        .dim {
          @apply absolute-center z-[2] w-full h-full block max-xl:hidden;
          background: linear-gradient(to top, #020802 0%, transparent 40%);
          content: "";
        }
        + figcaption {
          @apply w-full text-center px-2;
          h6 {
            @apply text-lg xl:text-xl font-bold px-4 pt-2 lg:px-16;
            word-break: keep-all;
          }

          .info-list {
            @apply text-xs lg:text-sm my-1;
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
  @apply w-12 h-12 rounded-full bg-grayscale-100 -translate-x-1/2 -translate-y-1/2 z-[2] absolute pointer-events-none text-[#020802] mix-blend-lighten opacity-70 max-xl:hidden;
  transition: width, height 0.1s ease-in-out;
  .text {
    @apply text-base absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 text-green-600 font-bold;
  }
}
</style>
