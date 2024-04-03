<template>
  <div class="marquee">
    <div class="marquee-content">
      <div class="marquee-images">
        <logo-symbol v-for="i in 10" :key="i" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.marquee {
  @apply overflow-hidden relative text-nowrap font-light whitespace-nowrap w-full h-auto pb-[59px] border-t border-grayscale-800;
}

.marquee-content {
  @apply block absolute text-nowrap;
  animation: marquee 20s reverse linear infinite;
  /* margin-top: 24px; */
  .marquee-images {
    @apply flex;

    svg {
      @apply block w-[400px];
      height: auto;
      .letter {
        fill: #000;
      }
      .arrow {
        fill: #64ff93;
      }
    }
  }
}

@keyframes marquee {
  from {
    left: 0;
    top: 50%;
    transform: translateY(-50%) translateX(0);
  }
  to {
    left: 0;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
