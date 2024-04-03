<template>
  <div>
    <!-- key 없이 잘못된 접근시 -->
    <status-loading />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/auth";

definePageMeta({
  layout: "empty"
});

const router = useRouter();
const store = useAuth();
onMounted(() => {
  // auth 상태일때, 기본으로 이동할 페이지로 이동시킴
  if (store?.isAuthenticated) {
    router.push("/admin/works");
  } else {
    router.push("/auth/login");
  }
});
</script>

<style lang="postcss" scoped></style>
