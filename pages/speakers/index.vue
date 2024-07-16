<template>
  <div id="speakers">
    <section-speakers />

    <section class="section-list">
      <ul class="list-prorgrams">
        <li v-for="(item, i) in items" :key="item.id" class="list-item">
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
                <div class="w-full h-full bg-grayscale-200" />
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
  @apply container px-2 mx-auto mt-24 pb-40;
  .list-item {
    @apply mb-4;
    .item {
      @apply flex items-stretch border border-gray-800;
      .thumbnail {
        @apply w-3/12 lg:w-2/12 aspect-square relative p-[1px] overflow-hidden border-r border-grayscale-800;
        .image {
          @apply absolute-center w-full h-full;
        }
      }
      .infos {
        @apply px-4 py-2 w-9/12 lg:w-10/12 flex flex-col hover:cursor-pointer text-left text-gray-600 hover:text-gray-800 transition-all;
        h6 {
          @apply text-xl lg:text-2xl font-bold mb-2 mt-auto;
        }
        .brief {
          @apply truncate line-clamp-2 h-10 w-full mb-auto;
          p {
            @apply text-sm text-grayscale-700 text-wrap pe-4 lg:pe-8;
          }
        }
        .footer {
          @apply flex items-center mb-2;
          .profile {
            @apply w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden border border-gray-800;
          }
          .name {
            @apply ms-2;
          }
        }
      }
    }
  }
}
</style>
