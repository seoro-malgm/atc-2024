<template>
  <article class="auth-body">
    <header class="auth-header">
      <h1>
        <slot name="title"></slot>
      </h1>
    </header>
    <div class="auth-content">
      <slot name="content"></slot>
    </div>
  </article>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
</script>

<style lang="postcss" scoped>
.auth-body {
  .auth-header {
    @apply pb-4 mb-6 border-b;
    h1 {
      @apply text-xl font-bold text-green-600;
    }
  }
}
</style>
