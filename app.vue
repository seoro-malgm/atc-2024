<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.4s;
}
.slide-out-enter-from,
.slide-out-leave-to {
  opacity: 0;
  transform: translateY(24px);
}
</style>
