<template>
  <div id="section-subscribe" class="min-h-lvh text-center py-24">
    <div>
      <ol>
        <li>컨퍼런스가 있다</li>
        <li>워킹페스티벌이 있다</li>
        <li>준비되는 소식은 메일로 주겠다, 구독하면 된다.</li>
      </ol>
    </div>
  </div>
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

<style lang="postcss" scoped></style>
