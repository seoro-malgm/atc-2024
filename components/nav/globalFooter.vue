<template>
  <footer class="global-footer">
    <div class="copyrights">
      <h6 class="logo">
        <nuxt-img src="/logo.svg" />
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
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
// const router = useRouter();
// const route = useRoute();
</script>

<style lang="postcss" scoped>
.global-footer {
  @apply flex flex-col lg:flex-row justify-between;
  .copyrights {
    @apply p-2 lg:p-4 w-full text-xs;
    h6.logo {
      @apply mb-4 w-3/12 lg:w-1/12;
    }
    .text {
      @apply text-gray-400;
    }
  }

  .infos {
    @apply p-2 lg:p-4 max-lg:border-t lg:border-l;
  }
}
</style>
