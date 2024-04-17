<template>
  <section id="hero">
    <div class="title">
      <h1>ATC in Jirisan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit
        voluptatem tempore dolore ab quasi laboriosam eum veniam nisi, tempora
        praesentium quam deleniti beatae autem! Consequatur harum temporibus
        praesentium accusamus.
      </p>
    </div>
    <div class="content">
      <video src="/video/reels-dummy.mp4" autoplay playsinline muted loop />
    </div>
  </section>
</template>

<script setup>
// import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// const props = defineProps({
//   data: {
//     type: String,
//     default: null
//   }
// });
</script>

<style lang="postcss" scoped>
#hero {
  @apply relative;
  .title {
    @apply absolute top-[40%] left-[50%] text-center w-11/12 lg:w-7/12 px-2 lg:px-3;
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
    @apply relative overflow-hidden w-full pb-[80vh] md:pb-[56.25%];
    video {
      @apply absolute top-[50%] left-[50%] h-full w-auto;
      transform: translate(-50%, -50%);
      max-width: unset;
      z-index: -1;
    }
  }
}
</style>
