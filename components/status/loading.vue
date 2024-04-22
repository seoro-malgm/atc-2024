<template>
  <div class="loading">
    <UIcon name="svg-spinners:3-dots-move" class="icon" />
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.loading {
  @apply py-2 text-center;
  .icon {
    @apply text-2xl text-grayscale-500;
  }
}
</style>
