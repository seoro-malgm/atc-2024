<template>
  <div id="section-location">
    <div class="infos">
      <h2>지리산더케이호텔</h2>
      <p>전라남도 순천시 낙안읍 낙안로 100번길 10</p>
    </div>
    <div class="map">
      <!-- map -->
      <location-map
        :position="{ lat: 35.32170486450195, lng: 127.46190643310547 }"
        title="지리산더케이호텔"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const emits = defineEmits();
</script>

<style lang="postcss" scoped>
#section-location {
  @apply flex flex-col lg:flex-row lg:items-center;
  .infos {
    @apply px-4 lg:w-7/12;
  }
  .map {
    @apply w-full lg:w-5/12;
    height: 500px;
    border: 1px solid #ddd;
  }
}
</style>
