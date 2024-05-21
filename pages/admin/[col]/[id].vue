<template>
  <div>
    <template v-if="pending">
      <status-loading />
    </template>
    <template v-else-if="error">
      <pre>{{ error }}</pre>
    </template>
    <template v-else>
      <component :is="currentContent" :col="col" :id="id" :item="item" />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
// import ContentContact from "@/components/content/contact";
import { useRoute } from "vue-router";
const route = useRoute();

definePageMeta({
  layout: "dashboard"
});

const props = defineProps({
  col: {
    type: Object,
    default: null
  }
});

const id = computed(() => {
  return route.params.id;
});

const {
  data: item,
  pending,
  error,
  refresh
} = useAsyncData(`contact-${id.value}`, async () =>
  $fetch(`/api/collection/contact/${id.value}`)
);

const contents = {
  contact: ContentContact
};
const currentContent = computed(() => {
  return contents[props.col.key];
});
</script>

<style lang="postcss" scoped>
.content {
  @apply p-8 max-w-full block;
  text-wrap: wrap;
}
</style>
