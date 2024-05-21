<template>
  <div id="sponsor-benefit-table">
    <div class="content">
      <header class="benefit-header">
        <header-section> 스폰서 혜택 </header-section>
      </header>
      <section class="benefit-content"></section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
</script>

<style lang="postcss" scoped>
#sponsor-benefit-table {
  @apply mb-20;
  .benefit-content {
    @apply container mx-auto py-24;
  }
}
</style>
