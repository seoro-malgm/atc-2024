<template>
  <div class="input-group">
    <label class="input-label">
      <span class="input-title">{{ title }}</span>

      <UToggle v-model="value" />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "제목"
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
      @apply block mb-2 font-semibold text-lg text-black;
    }
    input {
      @apply block w-full px-3 py-2 bg-gray-300 rounded-lg;
    }
  }
}
</style>
