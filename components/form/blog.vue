<template>
  <div>
    <form-input-text
      :form="form"
      bind="title"
      title="제목"
      @input="$event => $emit('input', ['title', $event])"
    />
    <form-input-text
      :form="form"
      bind="txt"
      title="내용"
      @input="$event => $emit('input', ['txt', $event])"
    />
    <form-input-text
      :form="form"
      bind="url"
      title="주소"
      @input="$event => $emit('input', ['url', $event])"
    />
    <form-input-text
      :form="form"
      bind="test"
      title="테스트"
      @input="$event => $emit('input', ['test', $event])"
    />
  </div>
</template>

<script setup>
// import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  col: {
    type: Object,
    default: null
  },
  id: {
    type: String,
    default: null
  },
  form: {
    type: Object,
    default: null
  }
});
const emit = defineEmits();

const route = useRoute();
const no = computed(() => {
  return route.query?.no;
});
const id = computed(() => {
  return route.query?.id;
});

onMounted(() => {
  if (no.value) {
    emit("input", ["no", no.value]);
  }
});
</script>

<style lang="postcss" scoped></style>
