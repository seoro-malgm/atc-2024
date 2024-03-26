<template>
  <div id="form-works">
    <div class="grid grid-cols-2 gap-8">
      <div>
        <div class="mb-2 pb-2 border-b">
          <form-input-image
            :form="form"
            bind="thumbnailURL"
            path="thumbnail"
            title="썸네일"
            @input="$event => $emit('input', ['thumbnailURL', $event])"
          />
        </div>
        <div>
          <form-input-description
            :items="form.description"
            :form="form"
            bind="description"
            title="내용"
            @input="$event => $emit('input', ['description', $event])"
          />
        </div>
      </div>
      <div>
        <form-input-text
          class="mb-6"
          :form="form"
          bind="title"
          title="제목"
          @input="$event => $emit('input', ['title', $event])"
        />
        <form-input-textarea
          class="mb-6"
          :form="form"
          bind="text"
          title="설명텍스트"
          @input="$event => $emit('input', ['text', $event])"
        />

        <form-input-select
          class="mb-6"
          :form="childForm"
          title="카테고리"
          bind="category"
          :options="workCategories"
          placeholder="선택가능한 카테고리"
          :multiple="true"
          @input="inputCategory"
        />
        <form-input-text
          class="mb-6"
          :form="form"
          bind="party"
          title="참여자"
          @input="$event => $emit('input', ['party', $event])"
        />
        <form-input-date
          class="mb-6"
          :form="form"
          bind="workDate"
          title="프로젝트 날짜"
          @input="$event => $emit('input', ['workDate', $event])"
        />
        <form-input-list
          class="mb-6"
          :form="form"
          bind="url"
          title="주소"
          @input="$event => $emit('input', ['url', $event])"
        />
        <form-input-toggle
          :form="form"
          class="mb-6"
          title="공개 여부"
          bind="visible"
          color="malgm"
          @input="$event => $emit('input', ['visible', $event])"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import serviceList from "@/data/service-list.json";

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

// bind를 관리하기위해 만든 하위 폼. 실제 form 상위에서 관리함
const childForm = ref({});

const workCategories = computed(() => {
  const categories = [];
  for (let i = 0; i < serviceList.length; i++) {
    const list = serviceList[i].list;
    for (let l = 0; l < list.length; l++) {
      const category = list[l];
      categories.push(category.id);
    }
  }
  return categories;
});

const inputCategory = list => {
  const items = [];
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    items.push(item);
  }
  emit("input", ["category", items]);
  childForm.value = items;
};

onMounted(() => {
  if (no.value) {
    emit("input", ["no", no.value]);
  }
  if (props.form.category) {
    console.log("props.form?.category :", props.form?.category);
    childForm.value = props.form.category;
  }
});
</script>

<style lang="postcss" scoped></style>
