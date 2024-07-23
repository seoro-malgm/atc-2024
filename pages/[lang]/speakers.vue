<template>
  <div id="speakers">
    <section-speakers />

    <section class="section-list">
      <ul class="list-prorgrams">
        <li
          v-for="(item, i) in items"
          :key="item.id"
          class="list-item"
          :class="{ disabled: item?.disabled }"
        >
          <article class="item">
            <div class="thumbnail">
              <template v-if="item.subjectImage">
                <nuxt-img
                  :src="`/images/subjects/${item.subjectImage}`"
                  provider="defaultProvider"
                  class="image"
                />
              </template>
              <template v-else>
                <div class="w-full h-full bg-green-200" />
              </template>
            </div>
            <button class="infos" @click="selected = item">
              <h6>
                {{ $t(item.title) }}
              </h6>
              <div class="brief">
                <p>
                  {{ $t(item.brief) }}
                </p>
              </div>
              <div class="footer">
                <div class="profile">
                  <template v-if="item?.image">
                    <nuxt-img
                      :src="`/images/speakers/${item.id}.png`"
                      provider="defaultProvider"
                      class="image"
                    />
                  </template>
                  <template v-else>
                    <div class="w-full h-full bg-green-200"></div>
                  </template>
                </div>
                <div class="info">
                  <div class="name">
                    {{ $t(item.name) }}
                  </div>
                </div>
              </div>
            </button>
          </article>
        </li>
      </ul>
    </section>
    <div class="mb-24">
      <div class="text-center">
        <span class="text-sm text-gray-700">
          {{ $t("message_infos_speakers_comming_soon") }}
        </span>
      </div>
    </div>

    <modal-speaker :selected="selected" @close="selected = null" />
  </div>
</template>

<script setup>
import spkeakerList from "@/data/speakerList.json";

const items = computed(() => {
  return spkeakerList;
});

const selected = ref();
</script>

<style lang="postcss" scoped>
.section-list {
  @apply container px-2 mx-auto my-24;
  .list-item {
    @apply mb-4 px-2;
    .item {
      @apply flex items-center border border-gray-800;
      .thumbnail {
        @apply w-4/12 lg:w-2/12 aspect-square relative p-[1px] overflow-hidden border-r border-grayscale-800 self-stretch;
        .image {
          @apply absolute-center object-cover h-full w-auto;
        }
      }
      .infos {
        @apply px-4 py-2 lg:pt-5 pb-3 w-8/12 lg:w-10/12 flex flex-col hover:cursor-pointer text-left text-gray-600 hover:text-gray-800 transition-all;
        h6 {
          @apply text-base lg:text-xl font-bold mb-2 mt-auto truncate w-full;
        }
        .brief {
          @apply truncate line-clamp-2 w-full mb-auto;
          p {
            @apply text-xs lg:text-sm text-grayscale-700 text-wrap pe-4 lg:pe-8;
          }
        }
        .footer {
          @apply flex items-center mt-4 mb-2;
          .profile {
            @apply w-8 lg:w-14 h-8 lg:h-14 rounded-full overflow-hidden border border-gray-800;
          }
          .name {
            @apply ms-1 lg:ms-2 text-xs;
          }
        }
      }
    }
    /* 아직 선택불가할 때 */
    &.disabled {
      @apply opacity-60 pointer-events-none;
    }
  }
}
</style>
