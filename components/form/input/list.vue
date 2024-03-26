<template>
  <div class="input-group">
    <span class="input-title">{{ title }}</span>
    <p class="input-desc" v-if="desc">
      {{ desc }}
    </p>
    <div class="value-input">
      <input
        :type="inputType ? inputType : 'text'"
        v-model="value"
        placeholder="추가할 아이템을 입력하세요"
        :required="required"
        :autocomplete="autocomplete"
        @keypress.enter.prevent="addValue(value)"
      />
      <button @click.prevent="addValue(value)" class="submit-value">
        <UIcon name="memory:plus-circle" />
      </button>
    </div>

    <ul class="list-value">
      <li v-for="(item, i) in list" :key="i" class="value-item">
        <span class="value">
          {{ item }}
        </span>
        <div class="util">
          <button class="btn btn-remove" @click.prevent="removeValue(i)">
            <UIcon name="memory:trash" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
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
    return true;
  }
});
const value = ref(null);
const list = ref([]);
watch(
  () => list.value,
  (n, o) => {
    emits("input", n);
  }
);

onMounted(() => {
  if (props.form[props.bind]) {
    list.value = props.form[props.bind];
  }
});

watch(
  () => props.form[props.bind],
  (n, o) => {
    list.value = n;
    emits("input", n);
  }
);

const addValue = v => {
  if (!v || v === "") return;
  list.value = [...list.value, v]; // 새로운 배열을 할당하여 참조 변경
  value.value = null;
};

const removeValue = index => {
  list.value = list.value.filter((_, i) => i !== index); // 새로운 배열을 할당하여 참조 변경
};
</script>

<style lang="postcss" scoped>
.input-group {
  @apply w-full mb-6;
  .input-title {
    @apply block mb-0 font-semibold text-lg text-black;
  }
  .input-desc {
    @apply text-sm font-light;
  }
  .value-input {
    @apply flex items-center justify-between;
    input {
      @apply block w-full mt-2 px-3 py-2 bg-baja-white-200 rounded-lg;
    }
    .submit-value {
      @apply ml-4 text-2xl;
    }
  }

  .list-value {
    @apply p-2 mt-2 inline-flex flex-wrap border w-full;
    .value-item {
      @apply flex items-center mr-2 mb-2 px-2 py-1 bg-grayscale-300 rounded-xl;
      span.value {
        @apply text-base ps-2;
      }
      .util {
        @apply ml-1;
        z-index: 2;
        .btn {
          @apply p-2 text-xl;
          .icon {
            @apply -mt-1;
          }
        }
      }
    }
  }
}
</style>
