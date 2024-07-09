<template>
  <div
    class="marquee"
    :style="{
      paddingBottom: height
    }"
  >
    <div
      class="marquee-content"
      :style="{
        animationDirection: direction,
        animationDuration: duration
      }"
    >
      <div class="marquee-images">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "80px"
  },
  direction: {
    type: String,
    default: "normal"
  },
  duration: {
    type: String,
    default: "40s"
  }
});
</script>

<style lang="postcss" scoped>
.marquee {
  @apply overflow-hidden relative text-nowrap font-light whitespace-nowrap w-full h-auto;
}

.marquee-content {
  @apply block absolute text-nowrap;
  animation: marquee 20s linear infinite;
  .marquee-images {
  }
}

@keyframes marquee {
  from {
    left: 0;
    top: 50%;
    transform: translateY(-50%) translateX(100%);
  }
  to {
    left: 0;
    top: 50%;
    transform: translateY(-50%) translateX(-100%);
  }
}
</style>
