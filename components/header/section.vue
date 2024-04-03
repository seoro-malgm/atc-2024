<template>
  <header class="border-t" :class="headerClass" ref="target">
    <h4 :class="{ shown: targetIsVisible }">
      <slot></slot>
    </h4>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
const props = defineProps({
  headerClass: {
    type: String,
    default: null
  }
});

const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
  }
);
</script>

<style lang="postcss" scoped>
header {
  @apply text-center py-4 lg:py-8;
  h4 {
    @apply font-bold text-xl lg:text-5xl;
    transform: translate(-300%);

    &.shown {
      animation: header-shown 0.7s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }
}

@keyframes header-shown {
  0% {
    transform: translate(-100%);
    font-style: normal;
  }
  99% {
    transform: translate(-1%);
    font-style: normal;
  }
  100% {
    @apply text-spring-green-400;
    font-style: italic;
    transform: translate(0%);
  }
}
</style>
