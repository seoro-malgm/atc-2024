<template>
  <div>
    <template v-if="col?.key">
      <section v-if="resultItems?.length">
        <table class="table mb-8">
          <thead>
            <tr>
              <th v-for="(item, i) in col.list.key" class="text-left">
                {{ item.text }}
              </th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="pending">
              <td :colspan="col.list.key?.length + 1">
                <status-loading />
              </td>
            </tr>
            <tr v-for="(item, i) in resultItems" :key="i">
              <td
                v-for="(item2, l) in col.list.key"
                :key="l"
                :width="item2?.width ? `${item2.width}%` : 'auto'"
              >
                <template v-if="item[item2.value] || item[item2.value] !== ''">
                  <!-- 텍스트 -->
                  <template v-if="item2.type === 'string'">
                    <p
                      class="truncate max-w-full px-3"
                      :class="item2?.addtionalClass"
                    >
                      {{ item[item2.value] }}
                    </p>
                  </template>
                  <!-- url -->
                  <template v-else-if="item2.type === 'url'">
                    <a
                      class="link-item text-blue-400 underline mx-2 px-2"
                      :class="item2?.addtionalClass"
                      :href="`https://seoro-malgm.studio/${item2.url}/${
                        item[item2.value]
                      }`"
                      target="_blank"
                    >
                      {{ item[item2.value] }}
                    </a>
                  </template>
                  <!-- 이미지 -->
                  <template v-else-if="item2.type === 'image'">
                    <nuxt-img
                      preset="adminThumbnail"
                      :src="item[item2.value]"
                    />
                  </template>
                  <!-- 파일 -->
                  <template v-else-if="item2.type === 'file'">
                    <a
                      :href="item[item2.value]"
                      target="_blank"
                      class="link-item text-blue-400 underline mx-2 px-2"
                    >
                      미리보기
                    </a>
                  </template>
                  <template v-else> - </template>
                </template>
              </td>
              <td class="py-2 border-b" width="10%">
                <div class="flex flex-col">
                  <button
                    @click="onDelete(col.key, item?.id, i)"
                    class="bg-red-600 text-grayscale-200 rounded-md mb-1 py-1"
                    v-if="col.removeable"
                  >
                    삭제
                  </button>
                  <button
                    class="bg-orange-500 text-grayscale-200 rounded-md py-1"
                    @click="
                      $router.push({
                        path: `/admin/${col.key}/write`,
                        query: {
                          id: item?.id
                        }
                      })
                    "
                    v-if="col.editable"
                  >
                    수정
                  </button>
                  <button
                    class="bg-orange-500 text-grayscale-200 rounded-md py-1"
                    @click="
                      $router.push({
                        path: `/admin/${col.key}/${item.id}`
                      })
                    "
                    v-if="col.preview"
                  >
                    상세보기
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="!resultItems?.length">
              <td :colspan="col.list.key?.length + 1">
                <div class="text-center">
                  <span class="text-sm">표시할 데이터가 없습니다.</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <section class="mt-3">
          <nav class="footer-util">
            <button
              @click="viewMore()"
              v-if="!pending && !endPage"
              class="inline-block border border-grayscale-800 rounded-full px-8 py-3 border-grayscale-800 hover:animate-wiggle hover:bg-spring-green-500 hover:text-grayscale-200 hover:border-spring-green-500"
            >
              더 불러오기
            </button>

            <span class="text-grayscale-400" v-if="!pending && endPage">
              End.
            </span>
          </nav>
        </section>
      </section>
      <template v-if="!resultItems?.length">
        <div class="text-center pt-4 pb-8 border-b border-b-grayscale-300">
          <span class="text-sm text-grayscale-500"> 데이터가 없습니다.</span>
        </div>
      </template>
      <div class="floating-btn">
        <NuxtLink
          class="link-item"
          :to="{
            path: `/admin/${col.key}/write`,
            query: {
              no: Number(items[0]?.no + 1 || 0)
            }
          }"
          v-if="col.creatable"
        >
          새로 추가하기
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <div class="error-message">
        <h6>ERROR 404</h6>
        <span>잘못된 접근입니다.</span>
        <div class="mt-4"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: "dashboard"
});

const props = defineProps({
  col: {
    type: Object,
    default: null
  },
  addQuery: {
    type: Object,
    default: null
  }
});
const toast = useToast();

const lastDocId = ref(null);
const query = computed(() => {
  return {
    ...props.col?.defaultQuery,
    ...props.addQuery,
    ...route.query
  };
});

// 모든 페이지를 다 불러온 경우
const endPage = ref(false);

// 처음 불러오는 경우
// const firstLoad = ref(true);
const fetchItems = async queryData => {
  // firstLoad.value = false;
  if (!props.col?.key) {
    toast.add({
      id: `not-found-col-key`,
      title: `ERROR 404`,
      description:
        "잘못된 접근입니다. 로그인한 계정이 있는 경우, 로그아웃합니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
    router.push("/auth/login");
  }
  endPage.value = false;
  const data = await $fetch(`/api/collection/${props.col?.key}`, {
    query: queryData
  });
  if (query?.value?.limit && data?.length < query.value.limit) {
    endPage.value = true;
  }
  return data;
};

const {
  data: items,
  pending,
  error,
  refresh
} = await useAsyncData(`${props.col?.key}-items-admin`, async () => {
  await fetchItems({
    ...props.col?.defaultQuery,
    ...props.addQuery,
    ...route.query
  });
});

// 새로 불러올 때 새로 추가된 items
const newItems = ref([]);

// 처음 부른 데이터 + 새로 불러온 데이터
const resultItems = computed(() => {
  return [...items.value, ...newItems.value];
});

// 새로 데이터 불러오기
const viewMore = async () => {
  const id = resultItems.value[resultItems.value.length - 1].id;
  if (lastDocId.value === id) {
    endPage.value = true;
  }
  lastDocId.value = id;
  // firstLoad.value = false;
  const newData = await fetchItems({
    ...query.value,
    startAfter: id
  });
  if (newData) {
    newItems.value = [...newItems.value, ...newData];
  }
};

// 쿼리 감지
const watchCategory = watch(
  () => query.value,
  async (n, o) => {
    newItems.value = [];
    lastDocId.value = null;
    endPage.value = false;
    await refresh();
  }
);

// 삭제
const onDelete = async (col, id, index) => {
  const bool = await window.confirm("삭제사히겠습니까?");
  if (bool) {
    try {
      const data = await $fetch(`/api/${col}/document`, {
        method: "DELETE",
        query: {
          id
        }
      });
      if (data) {
        // router.push(`/admin/${props.col.key}`);
        toast.add({
          id: `work-delete-${new Date().getTime()}`,
          title: "정상적으로 삭제했습니다.",
          icon: "memory:checkbox-marked"
        });

        // 기존 목록을 복사하여 새로운 목록을 만듭니다.
        const list = [...items.value, ...newItems.value];
        list.splice(index, 1);
        items.value = list;
      }
    } catch (error) {
      toast.add({
        id: `${props.col.key}-delete-fail`,
        title: `ERROR ${error.statusCode}`,
        description: error.data.message || "문제가 발생하여 실패햇습니다.",
        icon: "memory:alert-octagon",
        color: "red"
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.footer-util {
  @apply flex justify-center items-center pb-8;
}
.floating-btn {
  @apply fixed bottom-10 right-10;
  .link-item,
  button {
    @apply text-nowrap my-auto bg-blue-300  hover:bg-blue-700 hover:text-grayscale-200 transition-all  px-5 py-3 rounded-full font-bold shadow-xl text-lg;
  }
}

.error-message {
  @apply text-center m-auto py-24;
  h6 {
    @apply text-3xl lg:text-[4rem] font-bold mb-10;
  }
}
</style>
