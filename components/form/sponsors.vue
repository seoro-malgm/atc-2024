<template>
  <div id="form-sponsor">
    <div class="mb-4 w-full md:w-3/12 lg:w-2/12">
      <form-input-image
        :form="form"
        bind="logo"
        path="sponsors"
        title="로고"
        @input="$event => $emit('input', ['logo', $event])"
      />
    </div>
    <div class="mb-4"></div>
    <form-input-text
      class="mb-6"
      :form="form"
      bind="name"
      title="이름"
      @input="$event => $emit('input', ['name', $event])"
    />
  </div>
</template>

<script setup>
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
const selected = ref(false);

const route = useRoute();
const no = computed(() => {
  return route.query?.no;
});
const id = computed(() => {
  return route.query?.id;
});
</script>

<style lang="postcss" scoped></style>
