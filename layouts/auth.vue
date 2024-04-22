<!-- /layouts/auth.vue  -->
<template>
  <div id="wrapper" ref="wrapper">
    <main id="main">
      <section id="content">
        <div class="body">
          <NuxtPage />
        </div>
        <footer>
          <span class="copyright">&copy; ATC 2024</span>
        </footer>
      </section>
    </main>
    <UNotifications />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply w-full min-h-svh p-4 flex justify-center items-center bg-grayscale-200;
  #main {
    @apply m-auto w-full flex justify-center;
    #content {
      @apply w-10/12 lg:w-6/12;
      .body {
        @apply bg-white p-6 rounded-lg min-h-[400px] shadow-lg;
      }
      footer {
        @apply w-full text-right mt-4 pt-4 text-grayscale-800;
      }
    }
  }
}
</style>
