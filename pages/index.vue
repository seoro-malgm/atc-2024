<!-- 랜딩, 메인페이지 IA

1. 5회째 ATC가 온다!(`히어로섹션`), ATC는 무엇이며, 5회차나 되었다
2. 국내 1호 최대 규모인 `지리산 공원`에서한다
여기에서 행사에 참여하면 넌 ~를 얻을 수 있을거야.
3. 참가방법은 이거다, 지금하면 얼리버드 %할인
참여를 바로 못하는 5월에는 CTA버튼, 이메일 수집이라도 할 수 있게
4. 우리는 컨퍼런스도 한다 ⇒ 컨퍼런스페이지로 이동시키기 ⇒ 5월 스펙에는 미포함
⇒ 컨퍼런스는 사진으로 어려우니 2D그래픽들로
5. 워킹페스티벌도 한다 ⇒ 워킹페스티벌 페이지로 이동시키기  ⇒ 5월 스펙에는 미포함
6. 후원사, 주관사, 스폰서
7. FAQ 섹션 & FAQ 페이지 이동으로 보내든
8. 푸터(행사자정보, 연락정보) -->

<template>
  <div>
    <section-hero />
    <section-marquee>
      <div class="marquee-images">
        <logo-symbol v-for="i in 10" :key="i" />
      </div>
    </section-marquee>
    <section-scroll-horizontal :items="items"> </section-scroll-horizontal>
    <!-- <section-marquee>
      <div class="marquee-images">
        <logo-symbol v-for="i in 10" :key="i" />
      </div>
    </section-marquee> -->
    <!-- 참여 -->
    <section-subscribe-form />
    <!-- <div
      class="min-h-svh bg-slate-50 flex flex-col items-center justify-center"
    >
      컨퍼런스 내용?
    </div>
    <div
      class="min-h-svh bg-slate-50 flex flex-col items-center justify-center"
    >
      워킹페스티벌 내용?
    </div> -->

    <!-- 스폰서 등버튼 -->
    <section class="section-sponsorers border-b-0">
      <header-section> SPONSORS </header-section>
      <div class="list-wrapper">
        <div class="list-container">
          <ul class="list-sponsor">
            <li v-for="(item, i) in sponsors" :key="i">
              <div class="logo">
                <img
                  :src="`/images/sponsors/${item.src}`"
                  :alt="`${item.name} 로고이미지`"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section-marquee>
      <div class="marquee-images">
        <logo-symbol v-for="i in 10" :key="i" />
      </div>
    </section-marquee>
    <!-- faq -->
    <section-faq />
    <section-marquee>
      <div class="marquee-images">
        <logo-symbol v-for="i in 10" :key="i" />
      </div>
    </section-marquee>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import sponsors from "@/data/sponsorList";
// import SubscribeForm from "~/components/section/subscribeForm.vue";

const items = ref([
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "지리산이 속삭이는생명, 평화, 공존의 메세지"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "대한민국 최초·최대 국립공원",
      paragraph:
        "1967년 대한민국 1호 국립공원 지정 총 면적 483km² 대한민국 최대 국립공원 (여의도 면적의 57.5배)"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "우리나라 최다 생물종 서식지",
      paragraph:
        "국내 국립공원 중 최다 생물종(8,869종) 서식지 반달곰 등 멸종위기 129종 서식지(2023년)"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "우리나라 최초 도보여행 순례길",
      paragraph:
        "2007년 대한민국 최초 장거리 도보여행 순례길 조성 / 2021년 대한민국 1호 국가숲길 지정"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "우리나라 최대 트래킹 성지",
      paragraph:
        "지리산둘레길 이용객수 616만명 (2023년 누적) / 총 길이 289.4km 순례자(완주자) 2,988명 (2023년 누적)"
    }
  }
]);
</script>

<style lang="postcss" scoped>
.marquee-images {
  @apply flex;
  img,
  svg {
    @apply block w-[400px];
    height: auto;
  }
}

/* 스폰서 */
.section-sponsorers {
  .list-wrapper {
    @apply px-4 lg:px-12 border-y py-12;
    .list-container {
      .list-sponsor {
        @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6;
        li {
          /* margin: -1px; */
          .logo {
            @apply p-6 md:p-5 lg:p-10;
            img {
              @apply w-full h-auto;
              filter: saturate(0);
            }
          }
        }
      }
    }
  }
}
</style>
