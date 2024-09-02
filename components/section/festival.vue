<template>
  <section class="section-festival">
    <!-- 포스터 -->
    <div class="poster-wrapper">
      <figure class="poster">
        <nuxt-img
          class="image"
          provider="storageBucket"
          src="/posters/festival.jpg"
        />
      </figure>
    </div>
    <!-- 정보 -->
    <div class="infos">
      <header class="section-festival-header">
        <p class="subtitle">2,000명이 함께하는 지리산 로컬페스타</p>
        <h4 class="title">지리산 걷기 축제</h4>
      </header>
      <article>
        <div class="description">
          <p class="detail-info">10.26(토) / 전남 구례군</p>
          <span class="more-info">
            사전 참가 신청기간 09.02(월) - 10.14(월)
          </span>
        </div>
        <ul class="utils">
          <li>
            <a href="https://onoffmix.com/event/308375" target="_blank">
              참가신청 / registration
            </a>
          </li>
          <li>
            <a
              href="https://cut-monkey-9e4.notion.site/2024-ATC-5bcd635f4ae04d638cbb40c04ef90948"
              target="_blank"
            >
              자원봉사 신청 / volunteer
            </a>
          </li>
          <li>
            <a
              href="https://otherpado.notion.site/2024-438c364f843142b9a89b57901d4872b8"
              target="_blank"
            >
              자세히보기 / information
            </a>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style lang="postcss" scoped>
.section-festival {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-blue-50 p-4 lg:p-8;
  /* 포스터 영역 */
  .poster-wrapper {
    @apply relative;
    .poster {
      @apply relative aspect-[6/9];
      .image {
        @apply w-full h-full object-contain;
      }
    }
  }

  /* 정보 */
  .infos {
    @apply text-center py-3 lg:py-20;
    .section-festival-header {
      @apply mb-8;
      .subtitle {
        @apply text-lg lg:text-2xl font-bold mb-3;
      }
      .title {
        @apply text-4xl lg:text-5xl text-green-800 font-bold;
      }
    }
    .description {
      @apply my-12 text-grayscale-800;
      .detail-info {
        @apply text-lg lg:text-2xl font-bold;
      }
      .more-info {
        @apply text-sm lg:text-lg;
      }
    }
    .utils {
      li {
        @apply mb-4 mx-0 text-white;
        a:link {
          @apply block bg-green-800 p-4 lg:p-6 text-white text-lg lg:text-2xl font-bold hover:scale-105 transition-all-default;
        }
      }
    }
  }
}
</style>
