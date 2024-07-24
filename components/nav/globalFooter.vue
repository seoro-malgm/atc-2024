<template>
  <footer class="global-footer">
    <section-marquee />
    <!-- 푸터 정보 -->
    <div class="content">
      <div class="footer-container">
        <div class="copyrights">
          <h6 class="logo">
            <nuxt-img src="/logo-white.svg" provider="defaultProvider" />
          </h6>
          <span class="text">
            &copy; 2024 Soopgil Foundation. All rights reserved.</span
          >
        </div>

        <div class="infos">
          <ul>
            <li>{{ $t("global_main-name__title") }}</li>
            <li>{{ $t("global_main-owner__title") }}</li>
            <li>{{ $t("global_main-adds__title") }}</li>
            <li>{{ $t("global_main-number__title") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// import { ref, computed, onMounted, onUnmounted, watch } from "vue";
// const router = useRouter();
// const route = useRoute();
</script>

<style lang="postcss" scoped>
.global-footer {
  /* @apply ; */
  .content {
    @apply bg-deep-green-950;
    .footer-container {
      @apply flex flex-col lg:flex-row justify-between bg-deep-green-950;
    }
  }
  .copyrights {
    @apply p-4 lg:py-8 lg:px-12 w-full text-xs;
    h6.logo {
      @apply mb-4 w-3/12 lg:w-1/12;
    }
    .text {
      @apply text-grayscale-300;
    }
  }

  .infos {
    @apply p-4 lg:py-8 lg:px-12 max-lg:border-t lg:border-l border-grayscale-400 text-grayscale-300;
  }
}
</style>
