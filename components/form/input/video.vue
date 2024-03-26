<template>
  <div class="input-group">
    <div class="input">
      <span class="input-title" v-if="title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <template v-if="value">
        <!-- value: {{ value }} -->
        <figure class="attached-video">
          <video class="w-full aspect-video">
            <source :src="value" />
          </video>
          <div class="utils">
            <button
              @click.prevent="onRemove(currentFileName)"
              class="btn-remove"
            >
              <UIcon name="memory:trash" />
            </button>
          </div>
        </figure>
      </template>
      <template v-else>
        <template v-if="pending">
          <status-loading />
        </template>
        <template v-else>
          <div class="input-file">
            <input
              type="file"
              @change="onFileAttached"
              :required="required"
              :autocomplete="autocomplete"
              :id="id"
              accept=".mp4, .mov, .webp"
            />
            <label :for="id" class="input-label"> 비디오 업로드 </label>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: `input-video-obj`
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
  path: {
    type: String,
    required: true,
    default: "image"
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
const emits = defineEmits({
  input: payload => {
    // console.log("payload:", payload);
    return true;
  }
});
const value = ref(null);
const currentFileName = ref(null);

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

const toast = useToast();
// 업로드 중 상태를 나타내는 ref 추가
const pending = ref(false);

onMounted(() => {
  if (props.form[props.bind]) {
    value.value = props.form[props.bind];
  }
});

// 파일 첨부 및 업로드 로직
const onFileAttached = async e => {
  const file = e.target.files[0];
  if (!file) return; // 파일이 없는 경우 early return

  pending.value = true; // 업로드 시작, pending 상태 true로 설정

  try {
    const type = file?.name.split(".").at(-1);
    const fileName = `thumbnail_${new Date().getTime()}.${type}`;

    const formData = new FormData(); // FormData 인스턴스 생성
    formData.append("file", file); // 'file' 키에 파일 추가

    // 파일 업로드 요청
    const response = await $fetch("/api/storage/create", {
      method: "POST",
      body: formData,
      query: {
        path: props.path,
        fileName,
        type: file.type
      }
    });
    if (response) {
      value.value = response.url;
      currentFileName.value = response.name;
    }
  } catch (error) {
    toast.add({
      id: "upload-fail",
      title: `ERROR ${error.statusCode}`,
      description: error.data.message || "에러가 발생하였습니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
  } finally {
    pending.value = false; // 업로드 종료, pending 상태 false로 설정
    e.target.value = ""; // 입력 필드 초기화
  }
};

const onRemove = async e => {
  await $fetch("/api/storage/delete", {
    method: "DELETE",
    query: {
      path: props.path,
      fileName: e.name
    }
  });
  pending.value = false; // 업로드 종료, pending 상태 false로 설정
  value.value = null;
  currentFileName.value = null;
};
</script>

<style lang="postcss" scoped>
.input-group {
  @apply w-full;
  .input {
    .input-title {
      @apply block mb-0 font-semibold text-lg text-black;
    }
    .input-desc {
      @apply text-sm font-light;
    }
    .attached-video {
      @apply rounded-lg overflow-hidden relative;
      > img {
        @apply w-full h-auto;
      }
      .utils {
        @apply absolute top-4 right-4;
        z-index: 2;
        button {
          @apply w-8 h-8 rounded-full p-2 flex items-center justify-center;
        }
        .btn-remove {
          @apply bg-red-400 hover:bg-red-800 text-white;
        }
      }
    }

    .input-file {
      input {
        @apply hidden;
      }
      .input-label {
        @apply block w-full px-3 py-2 bg-baja-white-200 rounded-lg text-center hover:bg-gray-400 ease-default;
      }
    }
  }
}
</style>
