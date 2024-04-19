<template>
  <div class="input-date-picker">
    <label class="input-label" :for="id">
      <span class="input-title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <div class="input">
        <v-calendar-date-picker
          v-model="date"
          :columns="1"
          v-bind="{ ...attrs, ...$attrs }"
          :attributes="attributes"
          :min-date="attributes?.minDate"
          :max-date="attributes?.maxDate"
          :disabled-dates="attributes?.disabledDates"
          :dates:="attributes?.dates"
        />
      </div>
    </label>
  </div>
</template>

<script setup>
import { DatePicker as VCalendarDatePicker } from "v-calendar";

import "v-calendar/dist/style.css";

const props = defineProps({
  modelValue: {
    type: [Date, Object],
    default: null
  },
  attributes: {
    type: Object,
    default: null
  },
  title: {
    type: String,
    required: true,
    default: "제목"
  },
  id: {
    type: String,
    default: "date-picker"
  },
  desc: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: null
  },
  autocomplete: {
    type: String,
    default: null
  }
});

const emit = defineEmits(["update:model-value", "close"]);

const date = computed({
  get: () => props.modelValue,
  set: value => {
    emit("update:model-value", value);
    emit("close");
  }
});

const attrs = {
  transparent: true,
  borderless: true,
  color: "primary",
  "is-dark": { selector: "html", darkClass: "dark" },
  "first-day-of-week": 2
};
</script>

<style lang="postcss" scoped>
:root {
  --vc-gray-50: rgb(var(--color-grayscale-50));
  --vc-gray-100: rgb(var(--color-grayscale-100));
  --vc-gray-200: rgb(var(--color-grayscale-200));
  --vc-gray-300: rgb(var(--color-grayscale-300));
  --vc-gray-400: rgb(var(--color-grayscale-400));
  --vc-gray-500: rgb(var(--color-grayscale-500));
  --vc-gray-600: rgb(var(--color-grayscale-600));
  --vc-gray-700: rgb(var(--color-grayscale-700));
  --vc-gray-800: rgb(var(--color-grayscale-800));
  --vc-gray-900: rgb(var(--color-grayscale-900));
}

.vc-primary {
  --vc-accent-50: #eef2ff;
  --vc-accent-100: #dfe6ff;
  --vc-accent-200: #c6d0ff;
  --vc-accent-300: #a3b1fe;
  --vc-accent-400: #7e87fb;
  --vc-accent-500: #5f60f5;
  --vc-accent-600: #4f42e9;
  --vc-accent-700: #4334ce;
  --vc-accent-800: #372da6;
  --vc-accent-900: #312c83;
}

.input-date-picker {
  .vc-conainer {
    @apply w-full;
  }
  .input {
    :deep(.vc-weekday-1) {
      @apply text-red-500;
    }
    :deep(.vc-weekday-7) {
      @apply text-purple-heart-600;
    }
    :deep(.vc-day),
    :deep(.vc-day-content) {
      @apply rounded-none w-full;
    }
    :deep(.vc-day .vc-primary) {
      @apply bg-purple-heart-600 transition-all-default;
    }
    :deep(.vc-container) {
      @apply w-full;
    }
  }

  @apply w-full;
  .input-label {
    .input-title {
      @apply inline-block border px-3 py-1 border-grayscale-800 mb-2 font-semibold text-grayscale-900;
    }
    .input-desc {
      @apply text-sm font-light;
    }
    .input {
      @apply w-full bg-white transition-all-default mt-2;
      outline: none;
    }
  }
}
</style>
