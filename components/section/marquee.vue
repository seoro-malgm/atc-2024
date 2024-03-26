<template>
  <div class="marquee">
    <div class="marquee-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.marquee {
  @apply overflow-hidden relative text-nowrap font-light whitespace-nowrap w-full h-auto pb-[80px] border-y;
}

.marquee-content {
  @apply block absolute text-nowrap;
  animation: marquee 30s linear infinite;
  margin-top: 24px;
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
