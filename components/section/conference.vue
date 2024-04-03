<template>
  <section class="section-conference border-b-0" ref="container">
    <header-section> CONFERENCE </header-section>
    <div class="content">
      <!-- 내국인 -->
      <section class="part inner">
        <article
          class="article"
          :style="{
            transform: `rotate(-4deg) translateY(${
              partInnerVisible ? '0' : '150%'
            })`
          }"
          ref="partInner"
        >
          <header class="article-header">
            <h5>내국인</h5>
          </header>
          <section class="article-body">
            <p>
              내국인에겐 내국어 설명으로만 이루어지도록 작성하고,
              외국인내용으로는 영어만 작성함 Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Saepe atque laborum, porro
              consequuntur quos vel mollitia accusamus! Quaerat, earum.
              Similique, explicabo quos? Mollitia pariatur nihil molestiae
              beatae voluptatem porro voluptatibus?
            </p>
          </section>
          <footer class="article-footer">
            <nuxt-link
              class="link-item inner"
              to="https://www.event-us.kr/1986production/event/79474?utm_source=eventus&utm_medium=organic&utm_campaign=search-result&utm_term=%ED%8A%B8%EB%A0%88%EC%9D%BC)"
              target="_blank"
            >
              내국인 예약하기
            </nuxt-link>
          </footer>
        </article>
        <nuxt-img class="bg" src="/images/dummy.jpeg" />
        <!-- :style="{
            transform: `translate(${-50 + mouseX * 0.01 + -4}%, ${
              -50 + mouseY * 0.001
            }%)`
          }" -->
      </section>
      <!-- 외국인 -->
      <section class="part outer">
        <article
          class="article"
          :style="{
            transform: `rotate(-4deg) translateY(${
              partOuterVisible ? '0' : '150%'
            })`
          }"
          ref="partOuter"
        >
          <header class="article-header">
            <h5>for Foreigners</h5>
          </header>
          <section class="article-body">
            <p>
              안에들어가는 내용은 글자로 했지만, 슬라이드사진을 넣어도
              될것같습니다. 혹은 그래픽으로요. praesentium soluta sed
              consequuntur doloremque pariatur fugiat, itaque aliquam tempore
              iste veritatis magni ipsum voluptates totam? Impedit inventore
              vitae ratione, molestias quas voluptas vel nulla deserunt
              voluptatem cum. Accusamus incidunt pariatur possimus sapiente aut
              doloremque at dolor aliquid iste eos voluptatem cum excepturi
              dolores eius quaerat commodi accusantium vel nemo quod, modi
              voluptatum, quidem labore, molestiae ducimus. Illum animi vitae
              quis cum nobis accusantium possimus iure doloremque impedit.
            </p>
          </section>
          <footer class="article-footer">
            <nuxt-link
              class="link-item outer"
              to="https://www.eventbrite.com/e/5th-asia-trails-conference-tickets-873734773227?aff=oddtdtcreator"
              target="_blank"
            >
              Reserve!
            </nuxt-link>
          </footer>
        </article>
        <nuxt-img class="bg" src="/images/dummy.jpeg" />
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});

const container = ref();
// const { x: mouseX, y: mouseY, isOutside } = useMouseInElement(container);
const [partInner, partOuter] = [ref(null), ref(null)];
const [partInnerVisible, partOuterVisible] = [ref(false), ref(false)];

const { stopPartInner } = useIntersectionObserver(
  partInner,
  ([{ isIntersecting }], observerElement) => {
    partInnerVisible.value = isIntersecting;
  }
);
const { stopPartOuter } = useIntersectionObserver(
  partOuter,
  ([{ isIntersecting }], observerElement) => {
    partOuterVisible.value = isIntersecting;
  }
);
</script>

<style lang="postcss" scoped>
.section-conference {
  .content {
    @apply border-t grid grid-cols-1 lg:grid-cols-8 gap-8;
    .part {
      @apply lg:col-span-4 lg:min-h-svh px-4 py-20 lg:py-4 flex flex-col items-center justify-center relative overflow-hidden;
      &.inner {
        @apply lg:border-r;
      }
      &.outer {
        @apply lg:border-l;
      }

      .article {
        @apply border bg-white relative z-[2] w-10/12 lg:w-8/12;
        transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        .article-header {
          @apply text-center px-4 py-6 border-b;
          h5 {
            @apply font-bold text-lg lg:text-2xl;
          }
        }
        .article-body {
          @apply px-4 py-6;
        }
        .article-footer {
          @apply px-4 border-t py-4;
          .link-item {
            @apply text-lg lg:text-xl border px-6 py-2 w-full block text-center hover:bg-hawkes-blue-600 hover:text-white hover:border-hawkes-blue-600 transition-all;
          }
        }
      }
      /* 배경 */
      .bg {
        @apply absolute top-[50%] left-[50%] z-[-1] object-cover h-full w-auto translate-x-[-50%] translate-y-[-50%];
        transition: all 0.02s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      }
    }
  }
}
</style>
