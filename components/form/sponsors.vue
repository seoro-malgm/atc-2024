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
    <div class="mb-4">
      <form-input-text
        class="mb-6"
        :form="form"
        bind="name"
        title="이름"
        @input="$event => $emit('input', ['name', $event])"
      />
    </div>
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

// bind를 관리하기위해 만든 하위 폼. 실제 form 상위에서 관리함
// const childForm = ref({});

const route = useRoute();
const no = computed(() => {
  return route.query?.no;
});

// const id = computed(() => {
//   return route.query?.id;
// });

onMounted(() => {
  emit("input", ["no", no.value ? no.value : 0]);
});
</script>

<style lang="postcss" scoped></style>
