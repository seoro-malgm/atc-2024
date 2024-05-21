<template>
  <div>
    <header class="body-header">
      <h1>스폰서 관리</h1>
      <p>
        💡 스폰서 목록을 관리합니다, 로고를 드래그하여 순서를 수정할 수
        있습니다. 순서는
        <strong class="px-2 py-1 rounded-xl bg-spring-green-300 text-black mx-1"
          >저장</strong
        >을 눌렀을 때 진행됩니다.
      </p>
    </header>
    <div class="container">
      <section v-if="items?.length">
        <vue-draggable-next
          class="list-sponsors"
          v-model="items"
          group="sponsors"
          @end="onEnd"
          tag="ul"
        >
          <transition-group>
            <li class="list-item" v-for="(item, i) in items" :key="i">
              <button
                @click.prevent
                @drag.prevent
                @dragend.prevent
                @dragleave.prevent
                class="sponsor"
              >
                <figure class="wrap">
                  <div class="util">
                    <button
                      @click.prevent="onDelete(item.id, i)"
                      class="bg-classic-rose-300 hover:bg-classic-rose-500"
                    >
                      삭제
                    </button>
                  </div>

                  <nuxt-img
                    :src="item.logo"
                    :alt="`${item.name}의 로고`"
                    v-if="item?.logo"
                  />
                  <figcaption class="caption" v-if="item?.name">
                    {{ item.name }}
                    <br />
                    {{ item.no }}
                  </figcaption>
                </figure>
              </button>
            </li>
          </transition-group>
        </vue-draggable-next>
      </section>
      <template v-if="!items?.length">
        <div class="text-center pt-4 pb-8 border-b border-b-gray-300">
          <span class="text-sm text-grayscale-500"> 데이터가 없습니다.</span>
        </div>
      </template>
      <div class="floating-btn">
        <button
          class="link-item bg-spring-green-300 hover:bg-spring-green-500 me-4"
        >
          저장
        </button>
        <nuxt-link
          :to="{
            path: `/admin/${col.key}/write`,
            query: {
              no: Number(items[0]?.no + 1 || 0)
            }
          }"
          class="link-item bg-blue-300 hover:bg-blue-700"
        >
          새로 추가하기
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueDraggableNext } from "vue-draggable-next";
const toast = useToast();

definePageMeta({
  layout: "dashboard"
});

const props = defineProps({
  addQuery: {
    type: Object,
    default: null
  }
});
const col = computed(() => {
  return {
    text: "스폰서",
    key: "sponsors",
    icon: "material-symbols:location-city",
    description: "스폰서 목록을 관리합니다",
    editable: true,
    removeable: true,
    creatable: true,
    preview: false,
    formPreview: false,
    viewMoreable: false,
    defaultQuery: {
      orderBy: ["no", "asc"]
    }
  };
});

const salt = ref(0);
const {
  data: items,
  pending,
  error,
  refresh
} = await useAsyncData(
  `items-admin-sponsors-${salt.value}`,
  async () =>
    await $fetch(`/api/collection/sponsors`, {
      query: {
        orderBy: ["no", "asc"]
      }
    })
);

// 삭제
const onDelete = async (id, index) => {
  const bool = await window.confirm("삭제사히겠습니까?");
  if (bool) {
    try {
      const data = await $fetch(`/api/${col.value.key}/document`, {
        method: "DELETE",
        query: {
          id
        }
      });
      if (data) {
        toast.add({
          title: "정상적으로 삭제했습니다.",
          icon: "memory:checkbox-marked"
        });

        // 기존 목록을 복사하여 새로운 목록을 만듭니다.
        const list = [...items.value];
        list.splice(index, 1);
        items.value = list;
      }
    } catch (error) {
      toast.add({
        title: `ERROR ${error.statusCode}`,
        description: error.data.message || "문제가 발생하여 실패했습니다.",
        icon: "memory:alert-octagon",
        color: "red"
      });
    }
  }
};

const onEnd = e => {
  console.log("e :", e);
};
</script>

<style lang="postcss" scoped>
.body-header {
  @apply mb-4 py-3 border-b border-grayscale-800;
  h1 {
    @apply mb-3 text-2xl text-spring-green-700 font-bold;
  }
  p {
    @apply px-4 py-3 bg-grayscale-200 rounded-lg text-sm text-grayscale-700;
  }
}

.footer-util {
  @apply flex justify-center items-center pb-8;
}
.floating-btn {
  @apply fixed bottom-10 right-10;
  .link-item,
  button {
    @apply text-nowrap my-auto hover:text-grayscale-200 transition-all  px-5 py-3 rounded-full font-bold shadow-xl text-lg;
  }
}

.list-sponsors {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6;
  .list-item {
    @apply mb-6 px-2  text-center;

    .sponsor {
      @apply text-center mx-auto;
      .wrap {
        @apply relative;
        img {
          @apply border border-grayscale-800;
        }
        .util {
          @apply absolute top-0 right-0;
          button {
            @apply px-2 py-1 text-sm transition-all-default hover:text-white;
          }
        }
        .caption {
          @apply text-sm py-2 text-grayscale-800;
        }
      }
    }
  }
}
</style>
