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
              <template v-if="item?.subjectImage">
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
            <button class="infos" @click.prevent="selected = item">
              <h6>
                {{ $t(`${item.id}_title`) }}
              </h6>
              <div class="brief">
                <p>
                  {{ $t(`${item.id}_brief`) }}
                </p>
              </div>
              <div class="footer">
                <div class="profile">
                  <template v-if="item?.thumbnail">
                    <nuxt-img
                      :src="`/images/speakers/${item.thumbnail}`"
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
                    {{ $t(`${item.id}_name`) }}
                    <span> ({{ $t(`${item.id}_name_en`) }}) </span>
                  </div>
                  <div class="details">
                    <ul class="info-list">
                      <li v-if="$t(`${item.id}_company`) !== ''">
                        {{ $t(`${item.id}_company`) }}
                      </li>
                      <li v-if="$t(`${item.id}_position`) !== ''">
                        {{ $t(`${item.id}_position`) }}
                      </li>
                      <li v-if="$t(`${item.id}_website`) !== ''">
                        <client-only>
                          <button
                            :href="$t(`${item.id}_website`)"
                            target="_blank"
                            @click.prevent="linkTo($t(`${item.id}_website`))"
                          >
                            <UIcon name="ic:twotone-launch" />
                          </button>
                        </client-only>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </article>
        </li>
      </ul>
    </section>
    <div class="mb-48">
      <!-- <div class="text-center">
        <span class="text-sm text-gray-700">
          {{ $t("message_infos_speakers_comming_soon") }}
        </span>
      </div> -->
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

const linkTo = url => {
  window.open(url, "_blank");
};
</script>

<style lang="postcss" scoped>
.section-list {
  @apply container px-2 mx-auto my-24;
  .list-item {
    @apply mb-4 px-2;
    .item {
      @apply flex max-lg:flex-col items-center border border-gray-800;
      .thumbnail {
        @apply w-full lg:w-2/12 aspect-square relative p-[1px] overflow-hidden lg:border-r border-grayscale-800 self-stretch;
        .image {
          @apply absolute-center object-cover h-full w-auto;
        }
      }
      .infos {
        @apply px-4 py-4 lg:pt-5 pb-3 w-full lg:w-10/12 flex flex-col hover:cursor-pointer text-left text-gray-600 hover:text-gray-800 transition-all;
        h6 {
          @apply text-lg lg:text-xl font-bold mb-2 mt-auto truncate w-full;
        }
        .brief {
          @apply truncate line-clamp-2 w-full mb-auto;
          p {
            @apply text-sm text-grayscale-700 text-wrap pe-4 lg:pe-8;
          }
        }
        .footer {
          @apply flex items-center mt-6;
          .profile {
            @apply w-16 lg:w-20 h-16 lg:h-20 rounded-full overflow-hidden border border-gray-800;
          }
          .name {
            @apply ms-2 text-base font-bold;
          }
          .details {
            @apply max-lg:mt-1;
            .info-list {
              @apply flex flex-col items-start text-sm overflow-hidden;
              li {
                @apply ms-2 max-lg:mb-1 text-sm;
                .icon {
                  @apply text-xl;
                }
              }
            }
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
