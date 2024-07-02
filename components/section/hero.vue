<template>
  <section id="hero">
    <!-- <div class="title">
      <h1>ATC in Jirisan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit
        voluptatem tempore dolore ab quasi laboriosam eum veniam nisi, tempora
        praesentium quam deleniti beatae autem! Consequatur harum temporibus
        praesentium accusamus.
      </p>
    </div> -->
    <div
      class="content"
      :style="{
        height: `calc(100vh - ${headerHeight}px)`
      }"
    >
      <!-- dummy reels -->
      <video :src="reelsURL" autoplay playsinline muted loop />
    </div>
    <div class="scroll-down" :class="{ 'opacity-0': scrollY >= 80 }">
      <span>SCROLL DOWN </span>
      <div class="icon">
        <icon-arr dir="down" color="transparent fill-white" />
      </div>
    </div>
  </section>
</template>

<script setup>
import sponsors from "@/data/sponsorList";
const reelsURL = getRefURL("reels-dummy.mp4");

const props = defineProps({
  scrollY: {
    type: [Number, String],
    default: 0
  },
  headerHeight: {
    type: [Number, String],
    default: 0
  }
});
</script>

<style lang="postcss" scoped>
#hero {
  @apply max-lg:relative overflow-x-hidden;
  .title {
    @apply absolute top-[25%] lg:top-1/2 left-1/2 text-center w-11/12 lg:w-7/12 px-2 lg:px-3 z-20;
    text-shadow: 0px 0px 3px #121212;
    transform: translate(-50%);
    /* mix-blend-mode: difference; */
    h1 {
      @apply text-[72px] lg:text-[100px] font-extrabold mb-4 lg:mb-12 text-spring-green-300;
      line-height: 0.9;
    }
    p {
      @apply text-purple-heart-400;
    }
  }
  .content {
    @apply relative w-full;
    video {
      @apply absolute top-[50%] left-[50%] h-full w-auto;
      transform: translate(-50%, -50%);
      max-width: unset;
      z-index: -1;
    }
  }
  .scroll-down {
    @apply absolute bottom-10 left-[50%] translate-x-[-50%] flex items-center flex-col text-white transition-all lg:text-2xl;
    /* mix-blend-mode: difference; */
    .icon {
      @apply w-[56px] h-[56px] lg:w-[66px] lg:h-[66px] mt-3;
      animation: up-down 0.3s alternate infinite;
    }
  }
}

@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(8px);
  }
}
</style>
