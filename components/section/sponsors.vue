<template>
  <section class="section-sponsors border-b-0">
    <header-section> 주관 및 주최 </header-section>
    <!-- 스폰서 목록 -->
    <div class="list-wrapper">
      <div class="list-container">
        <ul class="list-sponsor">
          <li v-for="(item, i) in sponsors" :key="i">
            <div class="logo">
              <img
                :src="`/images/sponsors/${item.src}`"
                :alt="`${item.name} 로고이미지`"
                :title="`${item.name} 로고이미지`"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import sponsors from "@/data/sponsorList";

// const props = defineProps({
//   data: {
//     type: String,
//     default: null
//   }
// });
</script>

<style lang="postcss" scoped>
/* 스폰서 */
.section-sponsors {
  /* @apply bg-gray-200; */
  .list-wrapper {
    @apply py-12 container;
    .list-container {
      .list-sponsor {
        @apply grid grid-cols-3 lg:grid-cols-5;
        li {
          /* margin: -1px; */
          .logo {
            @apply p-6 md:p-5 lg:p-10;
            img {
              @apply w-full h-auto transition-all;
              filter: saturate(0);
            }
            &:hover {
              img {
                filter: saturate(1);
              }
            }
          }
        }
      }
    }
  }
}
</style>
