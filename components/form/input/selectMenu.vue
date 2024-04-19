<template>
  <div class="input-group">
    <div class="input-label">
      <span class="input-title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <USelectMenu
        v-model="selected"
        :options="options"
        :search-attributes="[...searchAttributes]"
        :multiple="multiple"
        :searchable="searchable"
        :searchablePlaceholder="searchablePlaceholder || '검색...'"
        :placeholder="placeholder || '선택하세요'"
        class="input"
        size="lg"
        :value-attribute="valueAttribute"
      >
        <!-- <template
          #option="{ option: item }"
          class="truncate"
          v-if="valueAttribute"
        >
          {{ item[valueAttribute] }}
        </template> -->
      </USelectMenu>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "제목"
  },
  desc: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  form: {
    type: Object,
    default: null
  },
  options: {
    type: Array,
    default: []
  },
  searchablePlaceholder: {
    type: String,
    default: null
  },
  searchAttributes: {
    type: Array,
    default: []
  },
  bind: {
    type: String,
    default: null
  },
  multiple: {
    type: Boolean,
    default: false
  },
  searchable: {
    type: Boolean,
    default: false
  },
  valueAttribute: {
    type: String,
    default: "label"
  },
  localStorage: {
    type: String,
    default: null
  }
});

const selected = ref([]);

const emits = defineEmits({
  input: payload => {
    // console.log("payload:", payload);
    return true;
  }
});

watch(
  () => selected.value,
  (n, o) => {
    emits("input", n);
  }
);
watch(
  () => props.form[props.bind],
  (n, o) => {
    selected.value = n;
    emits("input", n);
  }
);

onMounted(() => {
  if (props.form[props.bind]) {
    console.log("props.form[props.bind] :", props.form[props.bind]);
  }
  if (props.localStorage) {
    const storedItems = localStorage.getItem(props.localStorage);
    if (storedItems) {
      selected.value = JSON.parse(storedItems);
    }
  }
});
</script>

<style lang="postcss" scoped>
.input-group {
  @apply w-full mb-6;
  .input-label {
    .input-title {
      @apply inline-block border px-3 py-1 border-grayscale-800 mb-2 font-semibold text-grayscale-900;
    }
    .input-desc {
      @apply text-sm font-light text-grayscale-700;
    }
    .input {
      @apply w-full pt-2 rounded-none border-gray-800;
    }
  }
}
</style>
