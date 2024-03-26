<template>
  <form class="form" @focus="$emit('on-focus', $event)">
    <slot />
    <section class="form-footer">
      <a @click="$router.back()" class="link-item" v-if="cancelable"> 취소 </a>
      <button
        @click.prevent="submit"
        :class="{ disabled: disabled }"
        :[disabled]="{ disabled: disabled }"
      >
        {{ submitText || "제출" }}
      </button>
    </section>
  </form>
</template>

<script setup>
const props = defineProps({
  submitText: {
    type: String,
    default: null
  },
  cancelable: {
    type: Boolean,
    default: true
  },
  validate: {
    type: Object,
    default: null
  }
});

const disabled = computed(() => {
  return props.validate && Object.values(props.validate).some(v => v === true);
});
const emit = defineEmits();

const submit = e => {
  emit("submit", e);
};
</script>

<style lang="postcss" scoped>
.form {
  .form-footer {
    @apply mt-8 pt-4 pb-8 border-t border-grayscale-300 flex align-middle;
    .link-item {
      @apply w-1/12 bg-white border border-red-700 me-3 text-center block py-3 rounded-lg hover:bg-red-700 hover:text-baja-white-200 transition-all;
    }
    button {
      @apply text-nowrap w-full bg-blue-300 hover:bg-blue-700 rounded-lg hover:text-baja-white-200 transition-all px-2 py-3  font-semibold;
      color: #111135;
      &.disabled {
        @apply opacity-45;
      }
    }
  }
}
</style>
