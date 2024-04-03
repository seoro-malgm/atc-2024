<template>
  <div class="input-group">
    <div class="input-label">
      <span class="input-title">{{ title }}</span>
      <p class="input-desc" v-if="desc">
        {{ desc }}
      </p>
      <ul class="list-values">
        <VueDraggableNext
          class="list-values"
          v-model="list"
          group="description"
          @end="onEnd"
          tag="ul"
        >
          <transition-group>
            <li
              class="item-value"
              v-for="(item, i) in list"
              :key="`description-${item.type}-${item.id || i}`"
            >
              <div class="draggable">
                <button
                  class="btn-draggable cursor-grab"
                  @click.prevent
                  @drag.prevent
                  @dragend.prevent
                  @dragleave.prevent
                >
                  ::
                </button>
              </div>
              <div class="item">
                <template v-if="item?.type === 'image'">
                  <form-input-image
                    :form="list[i]"
                    bind="src"
                    path="images"
                    :id="`description-image-${item.id || i}`"
                    @input="$event => updateListItem(i, 'src', $event)"
                  />
                </template>
                <template v-if="item?.type === 'youtube'">
                  <form-input-youtube
                    :form="list[i]"
                    bind="src"
                    placeholder="유튜브 영상의 id를 입력하세요"
                    :id="`description-youtube-${item.id || i}`"
                    @input="$event => updateListItem(i, 'src', $event)"
                  />
                </template>
                <template v-if="item?.type === 'video'">
                  <form-input-video
                    :form="list[i]"
                    bind="src"
                    path="videos"
                    :id="`description-video-${item.id || i}`"
                    @input="$event => updateListItem(i, 'src', $event)"
                  />
                </template>
              </div>
              <div class="util">
                <button @click.prevent="list.splice(i, 1)">
                  <UIcon name="memory:trash" />
                </button>
              </div>
            </li>
          </transition-group>
        </VueDraggableNext>

        <li class="util">
          <div>내용 추가하기</div>
          <div class="btn-group">
            <div class="group-item">
              <button class="btn" @click.prevent="onAdd('image')">
                이미지
              </button>
            </div>
            <div class="group-item">
              <button class="btn" @click.prevent="onAdd('video')">
                비디오
              </button>
            </div>
            <div class="group-item">
              <button class="btn" @click.prevent="onAdd('youtube')">
                유튜브
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

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
  items: {
    type: Array,
    default: []
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
  }
});
const list = ref([]);

const onAdd = type => {
  list.value.push({
    id: `${type}_${new Date().getTime()}`,
    src: null,
    type
  });
};

const emits = defineEmits({
  input: payload => {
    return true;
  }
});
watch(
  () => list.value,
  (n, o) => {
    // console.log("n :", n);
    emits("input", n);
  },
  { deep: true }
);

watch(
  () => props.form[props.bind],
  (n, o) => {
    list.value = n;
    emits("input", n);
  }
);

const updateListItem = (index, key, value) => {
  const updatedItem = {
    ...list.value[index],
    [key]: value
  };
  list.value = [
    ...list.value.slice(0, index),
    updatedItem,
    ...list.value.slice(index + 1)
  ];
};

const onEnd = e => {
  // console.log("e :", e);
};
</script>

<style lang="postcss" scoped>
.input-group {
  @apply w-full;
  .input-label {
    .input-title {
      @apply block mb-0 font-semibold text-lg text-black;
    }
    .input-desc {
      @apply text-sm font-light;
    }
    .list-values {
      @apply border-t mt-2 pt-2;
      .item-value {
        @apply mb-6 flex items-center -mx-2;
        .draggable {
          @apply px-2;
          button {
            @apply p-2 bg-baja-white-200 rounded-lg hover:bg-gray-400 transition-all;
          }
        }
        .item {
          @apply w-full px-2;
        }
        .util {
          @apply px-2 mt-0 py-0;
          button {
            @apply p-2 bg-red-200 rounded-lg hover:bg-red-400 transition-all;
          }
        }
      }
      .util {
        @apply border-t mt-2 pt-2 flex flex-col items-center;
        .btn-group {
          @apply flex items-center justify-between -mx-2 w-full mt-2;
          .group-item {
            @apply px-2 w-full;
          }
          .btn {
            @apply py-1 px-2 w-full border text-blue-500 border-blue-300 hover:bg-blue-600 ease-default hover:text-white transition-all;
          }
        }
      }
    }
  }
}
</style>
