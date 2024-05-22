<template>
  <div class="error-page">
    <h1>{{ statusCode }} Error</h1>
    <p>{{ message }}</p>
    <button @click="goHome">홈으로 돌아가기</button>
  </div>
</template>

<script setup>
import { useError } from "nuxt/app";

const error = useError();

const statusCode = error?.value?.statusCode || 500;
const message = error?.value?.message || "Something went wrong";

const goHome = () => {
  window.location.href = "/";
};
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
}

.error-page h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.error-page button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.error-page button:hover {
  background-color: #0056b3;
}
</style>
