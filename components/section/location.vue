<template>
  <div id="section-location">
    <div class="infos">
      <header class="info-header">
        <h2 class="title">
          <div class="w-16 h-16 lg:w-28 lg:h-28 mb-2">
            <icon-map addClass="fill-spring-green-500 " />
          </div>
          오시는 길
        </h2>
        <p class="text-lg lg:text-xl font-bold">
          케이 지리산 가족호텔, 전라남도 순천시 낙안읍 낙안로 100번길 10
        </p>
      </header>
      <div class="info-list">
        <ul class="list-infos">
          <li v-for="(item, i) in items" :key="i" class="list-item">
            <article class="info-item" :class="{ open: i === selected }">
              <header class="header-info">
                <button
                  @click="selected = i"
                  class="accordian-btn"
                  :class="{ open: i === selected }"
                >
                  {{ item.label }}
                  <UIcon
                    name="ep:arrow-up-bold"
                    class="btn-icon"
                    :class="{ open: i === selected }"
                  />
                </button>
              </header>
              <section class="item-collapse">
                <div class="content-collapse">
                  <ul>
                    <li
                      v-for="(item2, l) in item.content"
                      :key="l"
                      class="mb-3"
                    >
                      <div class="flex items-end">
                        <strong class="me-2 text-lg">
                          {{ item2.name }}
                        </strong>
                        <small v-if="item2?.time">({{ item2.time }})</small>
                      </div>

                      <span>{{ item2.desc }}</span>
                    </li>
                  </ul>
                </div>
              </section>
            </article>
          </li>
        </ul>
      </div>
    </div>
    <div class="map">
      <!-- map -->
      <location-map
        :position="{ lat: 35.32170486450195, lng: 127.46190643310547 }"
        title="지리산더케이호텔"
      />
    </div>
  </div>
</template>

<script setup>
import guideList from "@/data/guideList";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emits = defineEmits();

const selected = ref(0);
const items = computed(() => {
  return guideList;
});
</script>

<style lang="postcss" scoped>
#section-location {
  @apply flex flex-col lg:flex-row lg:items-stretch border-b lg:min-h-[1080px] border-grayscale-900;
  .infos {
    @apply px-8 py-12 lg:w-4/12 order-2 lg:order-1;
    .info-header {
      /* @apply ; */
      .title {
        @apply text-2xl lg:text-5xl font-bold mb-3;
      }
    }
    /* 정보 리스트 */
    .list-infos {
      @apply mt-3;
      .list-item {
        /* @apply  */
        .info-item {
          @apply overflow-hidden;
          .header-info {
            @apply pt-2 pb-1;
            .accordian-btn {
              @apply transition-all-default font-semibold px-4 py-2 border hover:bg-spring-green-500  bg-white border-grayscale-800 w-full flex justify-between items-start text-left;
              .btn-icon {
                @apply transition-all-default translate-y-1;
              }
              &.open {
                @apply bg-spring-green-400;
                .btn-icon {
                  @apply rotate-180 translate-y-1;
                }
              }
            }
          }
          .item-collapse {
            @apply h-0 max-h-0 transition-all-default overflow-hidden;
            .content-collapse {
              @apply px-3 py-4  border-b border-grayscale-800 bg-purple-heart-100;
              transition-duration: 4s;
            }
          }
          &.open {
            .item-collapse {
              @apply h-[inherit] max-h-[100vh] lg:max-h-[100vh];
            }
          }
        }
      }
    }
  }
  .map {
    @apply w-full max-lg:min-h-[50vh] lg:self-stretch p-4 lg:w-8/12 order-1 lg:order-2  lg:border-l border-grayscale-900 relative;
  }
}
</style>
