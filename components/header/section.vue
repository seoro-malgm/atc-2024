<template>
  <header :class="headerClass" ref="target">
    <h4 :class="{ shown: targetIsVisible }">
      <slot></slot>
    </h4>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
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
    // console.log("isIntersecting :", isIntersecting);
    targetIsVisible.value = isIntersecting;
  }
);
</script>

<style lang="postcss" scoped>
header {
  @apply text-center py-4 lg:py-12 border-y border-grayscale-800 overflow-x-hidden;
  background-image: url("/arrow-right.svg");
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;
  h4 {
    @apply font-extrabold text-2xl lg:text-4xl lg:text-[4rem];
    transform: translate(-300%);
    text-transform: uppercase;

    &.shown {
      animation: header-shown 0.4s forwards cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

@keyframes header-shown {
  0% {
    transform: translate(-100%) skew(10deg);
  }

  100% {
    /* @apply text-spring-green-400; */
    transform: translate(0%) skew(-18deg);
  }
}
</style>
