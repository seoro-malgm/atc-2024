<template>
  <div id="icon-paper" class="icon">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63.667 29.0223V47.2379H103.421V29.0223L63.667 29.0223Z"
        :class="addClass"
      />
      <path
        d="M63.667 153.02V171.235H136.772V153.02H63.667Z"
        :class="addClass"
      />
      <path
        d="M91.0889 35.4461V56.3957V77.3564H106.552V56.3957V35.4461H91.0889Z"
        :class="addClass"
      />
      <path
        d="M147.496 77.3564H127.019H106.552V93.2492H127.019H147.496V77.3564Z"
        :class="addClass"
      />
      <path
        d="M93.7451 41.2586L119.216 61.7192L144.675 82.1798L154.44 69.6656L128.903 49.4606L103.433 29L93.7451 41.2586Z"
        :class="addClass"
      />
      <path
        d="M63.6673 100.862V48.6937H46V100.862V153.019H63.6673V100.862Z"
        :class="addClass"
      />
      <path
        d="M154.44 111.309V69.61H136.772V111.309V153.02H154.44V111.309Z"
        :class="addClass"
      />
    </svg>
  </div>
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
.icon {
  svg {
    @apply w-full;
  }
}
</style>
