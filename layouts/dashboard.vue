<template>
  <div id="admin">
    <nav-sidebar :links="links" />
    <main id="main">
      <div class="body-wrapper">
        <header class="body-header" v-if="col?.text">
          <h1>{{ col.text }} 관리</h1>
          <p v-if="col?.description">💡 {{ col.description }}</p>
        </header>
        <div class="body-container">
          <NuxtPage :col="col" />
        </div>
      </div>
    </main>
    <UNotifications />
  </div>
</template>

<script setup>
import links from "@/data/dashboardLinks";
import { useRoute } from "vue-router";
const route = useRoute();
const col = computed(() => {
  return links.find(link => link?.key === route.params.col);
});
</script>

<style lang="postcss" scoped>
#admin {
  @apply flex items-stretch justify-between sm:flow-root md:flex;
  #sidebar {
    /* @apply; */
  }
  #main {
    @apply min-h-dvh p-2 sm:w-full md:w-10/12 flex items-stretch justify-evenly;
    .body-wrapper {
      @apply w-full px-4 py-1 rounded-lg;
      .body-header {
        @apply mb-4 py-3 border-b border-grayscale-800;
        h1 {
          @apply mb-3 text-2xl text-spring-green-700 font-bold;
        }
        p {
          @apply px-4 py-3 bg-grayscale-200 rounded-lg text-sm text-grayscale-700;
        }
      }
      .body-container {
        @apply rounded-lg;
        height: auto;
      }
    }
  }
}
</style>
