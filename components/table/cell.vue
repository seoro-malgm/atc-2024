<template>
  <article class="cell">
    <header class="border-b border-gray-500">
      <button class="title" @click="emit('select', data)">
        {{ data?.title }}
      </button>
    </header>

    <footer class="cell-footer">
      <div class="profile">
        <template v-if="data?.image">
          <nuxt-img
            :src="`/images/speakers/${data.image}`"
            provider="defaultProvider"
            class="image"
          />
        </template>
        <template v-else>
          <div class="w-full h-full bg-green-200 p-4"></div>
        </template>
      </div>
      <div>
        <div class="name">
          {{ $t(`${data?.id}_name`) }}
          <template v-if="$t(`${data?.id}_name_en`)">
            ({{ $t(`${data?.id}_name_en`) }})
          </template>
        </div>
        <div class="details">
          <ul class="info-list">
            <li v-if="$t(`${data?.id}_company`) !== ''">
              {{ $t(`${data?.id}_company`) }}
            </li>
            <li v-if="$t(`${data?.id}_position`) !== ''">
              {{ $t(`${data?.id}_position`) }}
            </li>
            <li v-if="$t(`${data?.id}_website`) !== ''">
              <client-only>
                <button
                  :href="$t(`${data?.id}_website`)"
                  target="_blank"
                  @click.prevent="linkTo($t(`${data?.id}_website`))"
                >
                  <UIcon name="ic:twotone-launch" />
                </button>
              </client-only>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </article>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});
const emit = defineEmits();
const linkTo = url => {
  window.open(url, "_blank");
};
</script>

<style lang="postcss" scoped>
.cell {
  @apply flex flex-col gap-1;
  .title {
    @apply text-base lg:text-xl font-bold text-start w-full;
    @apply py-4 px-6;
    @apply hover:text-green-500 hover:bg-green-50 transition-all-default;
  }

  /* 푸터 */
  .cell-footer {
    @apply flex items-center mb-2 pt-2 px-6;
    .profile {
      @apply w-12 lg:w-14 h-12 lg:h-14 rounded-full overflow-hidden border border-grayscale-800;
    }
    .name {
      @apply ms-2 text-base lg:text-lg font-bold;
    }
    .details {
      @apply max-lg:mt-1;
      .info-list {
        @apply flex flex-col items-start text-sm overflow-hidden;
        li {
          @apply ms-2 max-lg:mb-1;
          .icon {
            @apply text-xl;
          }
        }
      }
    }
  }
}
</style>
