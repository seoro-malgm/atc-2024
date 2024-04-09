<template>
  <div>
    <status-loading />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/auth";

definePageMeta({
  layout: "auth-body"
});

const router = useRouter();
const store = useAuth();
onMounted(() => {
  if (store?.isAuthenticated) {
    router.push("/admin");
  } else {
    router.push("/auth/login");
  }
});
</script>

<style lang="postcss" scoped></style>
