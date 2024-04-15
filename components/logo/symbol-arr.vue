<template>
  <svg viewBox="0 0 466 276" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M329.477 0.308594L420.228 91.8062L466 137.954V0.308594H329.477Z"
      :class="addClass"
    />
    <path
      d="M329.477 275.599H466V137.954L420.228 184.101L329.477 275.599Z"
      :class="addClass"
    />
    <path
      d="M85.4123 0.308594L0.673828 88.9139V125.587V183.508H50.3437H157.462V275.599H328.429V183.508H157.462V95.1435H328.429V0.308594H85.4123Z"
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
