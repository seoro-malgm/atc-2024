<template>
  <svg viewBox="0 0 847 303" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M704.007 0L605.487 104.381L561.014 151.5V208.761V303H704.007V104.381V97.524H847V0H704.007Z"
      :class="addClass"
    />
    <path
      d="M418.04 0V151.5H284.986V0L141.993 151.5H-1V303H141.993L279.246 157.581V303H422.239V151.5H561.014V0H418.04Z"
      :class="addClass"
    />
  </svg>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  addClass: {
    type: String,
    default: ""
  }
});
</script>

<style lang="postcss" scoped>
svg {
  /* width: 100%; */
}
/* .letter {
  fill: #000;
}

.bg {
  transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.arrow {
  fill: #4f42e9;
} */
</style>
