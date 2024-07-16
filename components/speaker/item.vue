<template>
  <div>
    <figure class="speaker">
      <div class="thumbnail">
        <nuxt-img
          :src="`/images/speakers/${item.id}.png`"
          provider="defaultProvider"
        />
      </div>
      <figcaption class="caption-speaker">
        <button @click="selectItem(item)">
          {{ item.name.ko }}
        </button>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: null
  }
});
const emit = defineEmits();

// $emit('select-item', item.id)
const selectItem = item => {
  // console.log("item :", item);
  emit("select-item", item.id);
};
</script>

<style lang="postcss" scoped></style>
