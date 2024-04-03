<template>
  <div>
    <NuxtLoadingIndicator />
    <!-- 폼 컴포넌트 -->
    <form-input-wrap
      @submit.prevent="$evnet => (id ? update($evnet) : submit($evnet))"
    >
      <component
        :is="currentForm"
        :col="col"
        :id="id"
        :form="form"
        @input="$event => (form[$event[0]] = $event[1])"
        @init="$evnet => (form = $evnet)"
      />
      <div class="pt-4 border-t" v-if="col.formPreview">
        <h6 class="text-2xl mb-3">form 데이터 미리보기 :</h6>
        <pre
          class="block w-full overflow-auto bg-grayscale-300 border border-grayscale-800 text-wrap p-6 rounded-xl"
        >
form: {{ form }}
      </pre
        >
      </div>
    </form-input-wrap>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// import FormWorks from "@/components/form/works";
// import FormBlog from "@/components/form/blog";
// import FormClient from "@/components/form/client";
// import FormEstimates from "@/components/form/estimates";

definePageMeta({
  layout: "dashboard"
});

const props = defineProps({
  col: {
    type: Object,
    default: null
  }
});
const route = useRoute();
const router = useRouter();
const toast = useToast();

// 컬렉션에 따른 폼 목록
const forms = {
  works: FormWorks,
  blog: FormBlog,
  client: FormClient,
  estimates: FormEstimates
};
const currentForm = computed(() => {
  return forms[props.col.key];
});

onMounted(() => {
  if (!props.col.key || !currentForm.value) {
    window.alert("잘못된 접근입니다.");
    router.go(-1);
  }
});
// 폼 오브젝트
const form = ref({});

// 수정인지를 계산하기 위한 route 설정

const id = computed(() => {
  return route?.query?.id;
});
onMounted(() => {
  if (id.value) {
    getDoc(id.value);
  }
});
// id 가 있는 경우 form을 init 함
const getDoc = async id => {
  const data = await $fetch(`/api/${props.col.key}/document`, {
    method: "GET",
    params: {
      col: props.col.key
    },
    query: {
      id
    }
  });
  if (data) {
    form.value = { ...data };
  }
};

// 새로 추가
const submit = async e => {
  try {
    const data = await $fetch(`/api/${props.col.key}/document`, {
      method: "POST",
      body: {
        ...form.value,
        createdAt: new Date().toLocaleString(),
        viewer: 0
      }
    });
    if (data) {
      router.push(`/admin/${props.col.key}`);
      toast.add({
        id: `work-added-${new Date().getTime()}`,
        title: "정상적으로 추가되었습니다..",
        icon: "memory:checkbox-marked"
      });
    }
  } catch (error) {
    toast.add({
      id: `${props.col.key}-write-fail`,
      title: `ERROR ${error.statusCode}`,
      description:
        error.data.message || "업로드중에 문제가 발생하여 실패햇습니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
  }
};

const update = async e => {
  try {
    const data = await $fetch(`/api/${props.col.key}/document`, {
      method: "PUT",
      body: {
        ...form.value
      },
      query: {
        id: id.value
      }
    });
    if (data) {
      router.push(`/admin/${props.col.key}`);
      toast.add({
        id: `work-added-${new Date().getTime()}`,
        title: "정상적으로 수정되었습니다",
        icon: "memory:checkbox-marked"
      });
    }
  } catch (error) {
    toast.add({
      id: `${props.col.key}-update-fail`,
      title: `ERROR ${error.statusCode}`,
      description:
        error.data.message || "업데이트중에 문제가 발생하여 실패햇습니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
  }
};
</script>

<style lang="postcss" scoped></style>
