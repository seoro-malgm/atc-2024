<template>
  <section class="section-festival">
    <!-- 포스터 -->
    <div class="poster-wrapper">
      <figure class="poster">
        <nuxt-img
          class="image"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
      </figure>
    </div>
    <!-- 정보 -->
    <div class="infos">
      <header class="section-festival-header">
        <p class="subtitle">6개시군 지리산둘레길 탐험단장과 함께하는</p>
        <h4 class="title">지리산 숲길 탐험단</h4>
      </header>
      <article>
        <div class="description">
          <p class="detail-info">10.27(일)</p>
          <p class="detail-info">
            구례군, 남원시, 산청군장수군, 하동군, 함양군
          </p>
          <span class="more-info">
            사전 참가 신청기간 09.02(월) - 10.14(월)
          </span>
        </div>
        <ul class="utils">
          <li>
            <!-- todo : 링크 삽입 -->
            <a href="#"> 참가신청 / registration </a>
          </li>
          <li>
            <a href="https://tour.atcjirisan.com/" target="_blank">
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
    @apply relative order-1 lg:order-2;
    .poster {
      @apply relative aspect-[9/16];
      .image {
        @apply w-full h-full object-cover;
      }
    }
  }

  /* 정보 */
  .infos {
    @apply text-center py-3 lg:py-20 order-2 lg:order-1;
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
          @apply block bg-green-800 p-4 lg:p-6  text-lg lg:text-2xl font-bold hover:scale-105 transition-all-default;
        }
      }
    }
  }
}
</style>
