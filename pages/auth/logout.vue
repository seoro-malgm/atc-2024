<template>
  <div>this is logout</div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useAuth } from "@/stores/auth";

definePageMeta({
  layout: "auth"
});

onMounted(async () => {
  const router = useRouter();
  const store = useAuth();
  const toast = useToast();

  try {
    // API를 호출하여 로그아웃 수행
    await $fetch("/api/auth/logout");

    // API 호출 성공 후, Pinia 스토어에서 토큰 제거
    store.clearToken();

    // 토스트 추가
    toast.add({
      id: "logout-complete",
      title: "로그아웃에 성공하였습니다.",
      icon: "memory:logout"
    });

    // 로그아웃 성공 후, 로그인 페이지로 리디렉션
    router.push("/auth/login");
  } catch (error) {
    console.error("Logout failed:", error);
    toast.add({
      id: "logout-failed",
      title: error,
      icon: "memory:alert-octagon",
      color: "red"
    });
  }
});
</script>

<style lang="postcss" scoped></style>
