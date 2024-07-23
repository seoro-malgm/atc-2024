<template>
  <div>
    <NuxtPage
      :scrollY="scrollY"
      :headerHeight="headerHeight"
      @modal-subscribe="$event => $emit('modal-subscribe', $event)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  scrollY: {
    type: [Number, String],
    default: 0
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  },
  validate: {
    type: Boolean,
    default: false
  }
});

onMounted(() => {
  if (!props.validate) {
    navigateTo("/ko/home");
  }
});
</script>

<style lang="postcss" scoped></style>
