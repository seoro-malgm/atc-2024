<template>
  <UModal v-model="isOpen" prevent-close class="modal">
    <article class="modal-container" v-if="selected">
      <header class="modal-header">
        <h5 class="title" v-if="selected?.title">
          {{ $t(selected?.title) }}
        </h5>

        <div class="util">
          <button @click.prevent="close">
            <UIcon name="bxs:x-square" class="text-xl lg:text-2xl" />
          </button>
        </div>
      </header>
      <section class="modal-body">
        <p class="brief" v-if="selected?.brief">
          {{ $t(selected?.brief) }}
        </p>
        <p class="bio" v-if="selected?.bio">
          {{ $t(selected?.bio) }}
        </p>
      </section>
      <footer class="modal-footer">
        <div class="profile">
          <template v-if="selected?.image">
            <nuxt-img
              :src="`/images/speakers/${selected.image}`"
              provider="defaultProvider"
              class="image"
            />
          </template>
          <template v-else>
            <div class="w-full h-full bg-green-200"></div>
          </template>
        </div>
        <div>
          <div class="name">
            {{ $t(selected?.name) }}
          </div>
        </div>
      </footer>
    </article>
  </UModal>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: [Object, null],
    default: null
  }
});

const isOpen = ref(false);
const emits = defineEmits();
const close = () => {
  isOpen.value = false;
  emits("close");
};

watch(
  () => props.selected,
  (n, o) => {
    if (n && n !== null) {
      isOpen.value = true;
    } else {
      close();
    }
  }
);
</script>

<style lang="postcss" scoped>
.modal {
  .modal-container {
    /* 헤더 */
    .modal-header {
      @apply flex items-start justify-between px-4 py-2 border-b;
      h5.title {
        @apply text-lg lg:text-2xl font-bold py-2;
      }
      .util {
        @apply py-2;
      }
    }
    /* 내용 */
    .modal-body {
      @apply py-4 border-t border-grayscale-800;
      .brief {
        @apply text-base  px-4 pb-2 border-b border-grayscale-800 font-semibold;
        line-height: 1.7;
      }
      .bio {
        @apply text-gray-700 mt-2 px-4;
        line-height: 1.7;
      }
    }
    /* 푸터 */
    .modal-footer {
      @apply flex items-center mb-4 px-4;
      .profile {
        @apply w-10 lg:w-14 h-10 lg:h-14 rounded-full overflow-hidden border border-gray-800;
      }
      .name {
        @apply px-2;
      }
    }
  }
}
</style>
