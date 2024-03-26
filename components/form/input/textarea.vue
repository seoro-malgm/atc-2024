<template>
  <div class="input-group">
    <label class="input-label">
      <span class="input-title">{{ title }}</span>
      <textarea
        rows="4"
        v-model="value"
        placeholder="내용을 입력하세요."
        resize="none"
      />
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
  @apply w-full mb-6;
  .input-label {
    .input-title {
      @apply block mb-2 font-semibold text-lg text-black;
    }
    textarea {
      @apply block w-full px-3 py-2 bg-baja-white-200 rounded-lg;
      resize: none;
    }
  }
}
</style>
