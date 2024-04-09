<template>
  <section id="sidebar">
    <header class="sidebar-header">
      <h1>관리자페이지</h1>
    </header>
    <nav class="sidebar-nav">
      <ul class="">
        <li v-for="(item, i) in links" :key="i" class="mb-2">
          <nuxt-link :to="`/admin/${item.key}`" class="link-item">
            <UIcon
              :name="item.icon || 'ic:baseline-folder-special'"
              class="text-xl me-2 -mt-1"
            />
            {{ item.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- 유저 정보 -->
    <client-only>
      <template v-if="currentUser">
        <div class="pb-2 flex flex-col items-start text-grayscale-600">
          <strong class="font-bold">{{ currentUser.displayName }}</strong>
          <span class="font-light text-sm">{{ currentUser.email }}</span>
        </div>
      </template>
    </client-only>
    <!-- 푸터 정보 -->
    <footer class="sidebar-footer">
      <div class="util">
        <nuxt-link to="/auth/logout" class="btn-logout">로그아웃</nuxt-link>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useAuth } from "@/stores/auth";
const props = defineProps({
  links: {
    type: Array,
    default: []
  }
});

const authStore = useAuth();
const {
  data: currentUser,
  pending,
  error,
  refresh
} = await useAsyncData(
  `current-user-info`,
  async () => await authStore.currentUserInfo
);
</script>

<style lang="postcss" scoped>
#sidebar {
  @apply px-3 pb-3 sm:w-full md:min-h-dvh md:w-2/12 flex flex-col;
  .sidebar-header {
    @apply pt-0 pb-5;
    h1 {
      @apply text-2xl text-center font-bold px-3 pt-3 pb-4 rounded-xl bg-spring-green-100 text-spring-green-500 rounded-t-none;
    }
  }
  .sidebar-nav {
    @apply bg-grayscale-200 p-3 mb-2 rounded-lg h-full;
    ul {
      @apply flex flex-col justify-stretch;
      li {
        @apply mb-3;
        .link-item {
          @apply block p-3 rounded-lg font-semibold hover:bg-spring-green-200 text-sm text-grayscale-700 transition-all;
          &:hover {
            @apply bg-grayscale-300 text-grayscale-700;
          }
          &.active {
            @apply bg-spring-green-600 font-bold text-grayscale-200 hover:bg-spring-green-800;
          }
        }
      }
    }
  }
  footer.sidebar-footer {
    @apply mb-2;
    .util {
      .btn-logout {
        @apply px-2 py-1 border block text-center border-red-300 text-sm text-red-500 rounded-full hover:bg-red-500 hover:text-grayscale-200 transition-all;
      }
    }
  }
}
</style>
