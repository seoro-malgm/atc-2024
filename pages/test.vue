<template>
  <div class="pb-10">
    <ul>
      <li>
        <header>1. 기존</header>
        <section-marquee>
          <div class="marquee-images">
            <logo-symbol v-for="i in 10" :key="i" />
          </div>
        </section-marquee>
      </li>
      <li>
        <header>2. 에셋 A</header>
        <section-marquee>
          <div class="marquee-images asset-0">
            <img src="/public/assets-0.png" v-for="i in 10" alt="" />
            <!-- <logo-symbol v-for="i in 10" :key="i" /> -->
          </div>
        </section-marquee>
      </li>
    </ul>
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

<style lang="postcss" scoped>
.marquee-images {
  @apply flex;
  img,
  svg {
    @apply block w-[400px];
    height: auto;
  }
  &.asset-0 {
    img {
      width: 1300px;
      height: auto;
    }
  }
}
</style>
