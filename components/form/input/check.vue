<template>
  <div class="input-group">
    <label class="input-label">
      <span class="input-title" v-if="title">{{ title }}</span>
      <div class="flex items-center">
        <UCheckbox v-model="value">
          <template #label>
            <slot></slot>
          </template>
        </UCheckbox>
      </div>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  form: {
    type: Object,
    default: null
  },
  color: {
    type: String,
    default: "primary"
  },
  bind: {
    type: String,
    default: null
  }
});
const emits = defineEmits({
  input: payload => {
    // console.log("payload:", payload);
    return true;
  }
});
const value = ref(null);
watch(
  () => value.value,
  (n, o) => {
    emits("input", n);
    // console.log("n :", n);
  }
);
watch(
  () => props.form[props.bind],
  (n, o) => {
    value.value = n;
    emits("input", n);
  }
);
</script>

<style lang="postcss" scoped>
.input-group {
  @apply mb-3;
  .input-label {
    .input-title {
      @apply inline-block border px-3 py-1 border-grayscale-800 mb-2 font-semibold text-grayscale-900;
    }
    input {
      @apply block w-full px-3 py-2 bg-grayscale-300 rounded-lg;
    }
  }
}
</style>
