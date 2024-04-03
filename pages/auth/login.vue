<!-- /pages/auth/login.vue -->
<template>
  <div>
    <NuxtLayout name="auth-body">
      <template #title> LOGIN </template>
      <template #content>
        <form-input-wrap
          :cancelable="false"
          :validate="validate"
          @submit="$evnet => login($evnet)"
          @on-focus="onFocused = true"
          submitText="Login"
        >
          <form-input-text
            :form="form"
            title="Email"
            bind="email"
            inputType="email"
            @input="$event => (form.email = $event)"
            autocomplete="user-email"
            required
          />
          <form-input-text
            :form="form"
            title="Password"
            bind="pwd"
            inputType="password"
            @input="$event => (form.pwd = $event)"
            autocomplete="current-password"
            required
          />
        </form-input-wrap>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useAuth } from "@/stores/auth";
import { useRouter } from "vue-router";
const config = useRuntimeConfig();

const mode = computed(() => {
  return config.public.mode;
});

definePageMeta({
  layout: "auth"
});

const form = ref({
  email: null,
  pwd: null
});

onMounted(() => {
  // console.log("config.public.mode :", config.public.mode);
  // console.log("token :", sessionStorage.getItem(config.public.tokenName));
  // console.log("useAuth. :", useAuth().isAuthenticated);
  if (mode.value === "development") {
    form.value = {
      email: config.public.authId,
      pwd: config.public.authPwd
    };
  }
});

const validate = computed(() => {
  return {
    notValue: Object.values(form.value).some(
      v => v === null || v === undefined || v === ""
    )
  };
});

const toast = useToast();
const store = useAuth();
const router = useRouter();
const login = async e => {
  e.preventDefault();
  try {
    const data = await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        ...form.value
      }
    });
    if (data) {
      const { uid, refreshToken, accessToken } = data;
      store.setToken(accessToken);
      toast.add({
        id: "login-complete",
        title: "로그인에 성공하였습니다.",
        icon: "memory:login"
      });
      router.push("/admin");
    }
  } catch (error) {
    toast.add({
      id: "login-fail",
      title: `ERROR ${error.statusCode}`,
      description: error.data.message || "로그인중에 문제가 발생하였습니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
  }
};
</script>

<style lang="postcss" scoped></style>
