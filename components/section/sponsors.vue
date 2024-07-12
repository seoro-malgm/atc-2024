<template>
  <section class="section-sponsors border-b-0">
    <!-- 스폰서 목록 -->
    <div class="list-wrapper">
      <header-section> 주최 </header-section>
      <div class="list-container">
        <!-- 주최 -->
        <ul class="list-sponsor">
          <li
            class="list-item"
            v-for="item in sponsors?.hosting"
            :key="item.id"
          >
            <div class="logo">
              <img
                :src="`/images/sponsors/${item.src}`"
                :alt="`${item.name} 로고이미지`"
                :title="`${item.name} 로고이미지`"
              />
            </div>
          </li>
        </ul>
        <!-- 주관 -->
        <ul class="list-supervising">
          <li
            class="list-item"
            v-for="item in sponsors?.supervising"
            :key="item.id"
          >
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
      <header-section class="mt-12"> 주관 </header-section>
      <div class="list-container">
        <ul class="list-organization">
          <!-- 단체 -->
          <li
            class="list-item"
            v-for="item in sponsors?.organization"
            :key="item.id"
          >
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

if (
  !sponsors ||
  !sponsors?.hosting ||
  !sponsors?.supervising ||
  !sponsors?.organization
) {
  throw new Error("스폰서 데이터가 올바르게 로드되지 않았습니다.");
}
</script>

<style lang="postcss" scoped>
/* 스폰서 */
.section-sponsors {
  /* @apply bg-gray-200; */
  .list-wrapper {
    .list-container {
      @apply container mx-auto;
      .list-sponsor,
      .list-supervising,
      .list-organization {
        @apply flex items-center justify-center flex-wrap;
        .list-item {
          @apply w-1/2 lg:w-4/12 lg:my-2;
          .logo {
            @apply p-3 md:px-5 md:py-3 lg:px-8 lg:py-4;
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
      .list-organization {
        .list-item {
          @apply max-lg:w-4/12;
          .logo {
            @apply p-3 md:px-5 md:py-3 lg:px-20 lg:py-4;
          }
        }
      }
    }
  }
}
</style>
