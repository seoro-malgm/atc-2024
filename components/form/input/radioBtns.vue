<template>
  <div class="input-group">
    <div class="input-label" :for="id">
      <span class="input-title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <ul class="list-options">
        <li v-for="(item, i) in options" :key="i" class="item-option">
          <input
            v-model="value"
            :required="required"
            :autocomplete="autocomplete"
            :value="item.value"
            type="radio"
            :id="`option-${item.label}`"
            :class="[{ invalid: required && !validate }]"
            :invalid="required && !validate"
          />
          <label class="option-label" :for="`option-${item.label}`">
            {{ item.label }}
          </label>
        </li>
      </ul>
    </div>
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
    // required: true,
    default: null
  },

  bind: {
    type: String,
    // required: true,
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
  },
  options: {
    type: Array,
    default: () => []
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
    clg;
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
      @apply inline-block border px-3 py-1 border-grayscale-800 mb-2 font-semibold text-grayscale-900;
    }
    .input-desc {
      @apply text-sm font-light mb-2;
    }
    .list-options {
      @apply flex flex-wrap;
      .item-option {
        @apply mr-2 mb-2;
        .option-label {
          @apply inline-block border px-3 py-1 border-grayscale-800 mb-2 font-semibold text-grayscale-900 transition-all-default;
        }
        input[type="radio"] {
          @apply hidden;
        }
        input[type="radio"]:checked + .option-label {
          @apply bg-hawkes-blue-600 text-white;
        }
        input[type="radio"]:checked + .option-label::before {
          @apply block w-4 h-4 border border-grayscale-800 bg-hawkes-blue-600 text-white;
        }
      }
    }
  }
}
</style>
