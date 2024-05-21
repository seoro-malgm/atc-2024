<template>
  <footer class="global-footer">
    <!-- 공유하기 -->
    <section-share />
    <section-marquee />
    <!-- 푸터 정보 -->
    <div class="content">
      <div class="container">
        <div class="copyrights">
          <h6 class="logo">
            <nuxt-img src="/logo-white.svg" />
          </h6>
          <span class="text"> &copy; 2024 ATN all reserved.</span>
        </div>

        <div class="infos">
          <ul>
            <li>사단법인 숲길</li>
            <li>사업자 정보 확인 대표 : 이상윤</li>
            <li>주소 : (우)52326 경상남도 하동군 하동읍 중앙로 52-4</li>
            <li>사업자등록번호 : 292-82-00342</li>
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
    @apply bg-crusoer-950;
    .container {
      @apply flex flex-col lg:flex-row justify-between bg-crusoer-950;
    }
  }
  .copyrights {
    @apply p-4 lg:p-8 w-full text-xs;
    h6.logo {
      @apply mb-4 w-3/12 lg:w-1/12;
    }
    .text {
      @apply text-grayscale-300;
    }
  }

  .infos {
    @apply p-4 lg:p-8 max-lg:border-t lg:border-l border-grayscale-400 text-grayscale-300;
  }
}
</style>
