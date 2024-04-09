<template>
  <div class="input-group">
    <label class="input-label" :for="id">
      <span class="input-title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <input
        :type="inputType ? inputType : 'text'"
        v-model="value"
        :placeholder="placeholder || '입력해주세요.'"
        :required="required"
        :autocomplete="autocomplete"
        :id="id"
        :class="[{ invalid: required && !validate }]"
        :invalid="required && !validate"
      />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: `input-text-obj`
  },
  title: {
    type: String,
    default: null
  },
  desc: {
    type: String,
    default: null
  },
  inputType: {
    type: String,
    default: null
  },
  form: {
    type: Object,
    required: true,
    default: null
  },

  bind: {
    type: String,
    required: true,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: null
  },
  validate: {
    type: [Boolean, Object],
    default: false
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
  @apply w-full;
  .input-label {
    .input-title {
      @apply block mb-2 font-semibold text-lg text-grayscale-900;
    }
    .input-desc {
      @apply text-sm font-light;
    }
    input {
      @apply block w-full px-3 py-2 bg-white border border-2 border-gray-800 transition-all-default;
      outline: none;
      &.invalid,
      &:invalid {
        @apply border-classic-rose-500 border-2 bg-classic-rose-50;
      }
    }
  }
}
</style>
