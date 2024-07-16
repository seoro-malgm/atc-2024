<template>
  <div id="section-location">
    <div class="infos">
      <header class="info-header">
        <div class="w-16 h-16 lg:w-28 lg:h-28 mb-2">
          <icon-map addClass="fill-grayscale-900" />
        </div>
        <h2 class="title">{{ $t("main_map__title") }}</h2>
        <ul>
          <li class="mb-2">
            <button
              class="flex items-center p-1 text-grayscale-800"
              @click="clipboard($t('main_map__hotel'))"
            >
              <div class="w-8 h-8 ms-1 me-3 px-1">
                <icon-addr addClass="fill-grayscale-500" />
              </div>
              <span class="text-lg lg:text-2xl font-bold text-left">
                {{ $t("main_map__hotel") }}
              </span>
            </button>
          </li>
          <li class="mb-2">
            <button
              class="flex items-center p-1 text-grayscale-500"
              @click="clipboard($t('main_map__adds'))"
            >
              <div class="w-8 h-8 ms-1 me-3 px-1">
                <icon-copy addClass="fill-grayscale-500" />
              </div>
              <span class="text-lg lg:text-xl font-semibold text-left">
                {{ $t("main_map__adds") }}
              </span>
            </button>
          </li>
        </ul>
        <!-- <p class="text-lg lg:text-xl font-bold">,</p> -->
      </header>
      <div class="info-list">
        <ul class="list-infos">
          <li v-for="(item, i) in guideList" :key="i" class="list-item">
            <article class="info-item" :class="{ open: i === selected }">
              <header class="header-info">
                <button
                  @click="selected = i"
                  class="accordian-btn"
                  :class="{ open: i === selected }"
                >
                  {{ $t(item.label) }}
                  <UIcon
                    name="ep:arrow-up-bold"
                    class="btn-icon"
                    :class="{ open: i === selected }"
                  />
                </button>
              </header>
              <section class="item-collapse">
                <div class="content-collapse">
                  <ul class="min-h-[unset] h-[inherit]">
                    <li
                      v-for="(item2, l) in item.content"
                      :key="l"
                      class="mb-3"
                    >
                      <div class="flex items-end flex-wrap">
                        <strong class="me-2 text-lg">
                          {{ $t(item2?.name) }}
                        </strong>
                        <small class="text-base" v-if="item2?.time"
                          >({{ $t(item2.time) }})</small
                        >
                      </div>
                      <template v-if="item2?.desc">
                        <template
                          v-if="
                            typeof item2.desc !== 'string' &&
                            item2?.desc?.length
                          "
                        >
                          <ul>
                            <li
                              v-for="(item3, j) in item2.desc"
                              :key="j"
                              class="text-lg"
                            >
                              {{ $t(item3) }}
                            </li>
                          </ul>
                        </template>
                        <template v-else>
                          <span class="text-lg">{{ $t(item2.desc) }}</span>
                        </template>
                      </template>
                    </li>
                  </ul>
                </div>
              </section>
            </article>
          </li>
        </ul>
        <div class="my-2">
          <!-- <span v-html="$t('main_map_taxi_title')"> </span> -->
          <span c>
            <pre>{{ $t("main_map_taxi_title") }}</pre>
          </span>
        </div>
      </div>
    </div>
    <div class="map">
      <!-- map -->
      <location-map
        :position="{ lat: 35.32170486450195, lng: 127.46190643310547 }"
        :title="$t('main_map__hotel')"
      />
    </div>
  </div>
</template>

<script setup>
import guideList from "@/data/guideList";
const selected = ref(0);
</script>

<style lang="postcss" scoped>
#section-location {
  @apply flex flex-col lg:flex-row lg:items-stretch border-b lg:min-h-[100vh] border-grayscale-900;
  .infos {
    @apply px-8 py-12 lg:w-4/12 order-2 lg:order-1;
    .info-header {
      /* @apply ; */
      .title {
        @apply text-2xl lg:text-5xl font-bold mb-4 px-4;
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
              @apply transition-all-default text-lg lg:text-xl font-semibold px-4 py-2 border hover:bg-green-500  bg-white border-grayscale-800 w-full flex justify-between items-start text-left;
              .btn-icon {
                @apply transition-all-default translate-y-1;
              }
              &.open {
                @apply bg-green-400;
                .btn-icon {
                  @apply rotate-180 translate-y-1;
                }
              }
            }
          }
          .item-collapse {
            @apply h-0 max-h-0 transition-all-default overflow-hidden;
            .content-collapse {
              @apply px-3 py-4  border-b border-grayscale-800 bg-blue-100;
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
