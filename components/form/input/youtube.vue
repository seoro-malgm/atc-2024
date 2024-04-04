<template>
  <div class="input-group">
    <div class="input-label" :for="id">
      <span class="input-title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <template v-if="form[bind]">
        <iframe
          :src="form[bind]"
          frameborder="0"
          class="w-full aspect-video mb-3"
        />
      </template>
      <div class="input-item" v-if="!inputHidden">
        <div class="input">
          <input
            :type="inputType ? inputType : 'text'"
            v-model="value"
            :placeholder="placeholder || '입력해주세요.'"
            :required="required"
            :autocomplete="autocomplete"
            :id="id"
            @keypress.enter.prevent="initVideo(value)"
          />
        </div>
        <div class="util">
          <button @click.prevent="initVideo(value)">
            <UIcon name="memory:upload" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
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
    required: true,
    default: null
  },

  bind: {
    type: String,
    required: true,
    default: null
  },
  placeholder: {
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
const emits = defineEmits({
  input: payload => {
    // console.log("payload:", payload);
    return true;
  }
});

const value = ref(null);

const inputHidden = ref(false);
const initVideo = v => {
  emits("input", `https://www.youtube.com/embed/${v}`);
  value.value = null;
  inputHidden.value = true;
};

onMounted(() => {
  if (props.form[props.bind]) {
    value.value = props.form[props.bind];
    inputHidden.value = true;
  }
});

watch(
  () => props.form[props.bind],
  (n, o) => {
    console.log("n :", n);
    value.value = n;
    inputHidden.value = true;
    emits("input", `https://www.youtube.com/embed/${n}`);
  }
);
</script>

<style lang="postcss" scoped>
.input-group {
  @apply w-full;
  .input-label {
    .input-title {
      @apply block mb-0 font-semibold text-lg text-grayscale-900;
    }
    .input-desc {
      @apply text-sm font-light;
    }
    .input-item {
      @apply w-full flex items-center -mx-2;
      .input {
        @apply block w-10/12 px-3 py-2 bg-baja-white-200 rounded-lg;
        input {
          @apply w-full bg-transparent;
        }
      }
      .util {
        @apply px-2 w-2/12;
        button {
          @apply rounded-lg w-full bg-blue-300 px-2 py-2 hover:bg-blue-500 transition-all;
        }
      }
    }
  }
}
</style>
