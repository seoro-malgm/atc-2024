<template>
  <div id="map" ref="mapRef" style="width: 100%; height: 100vh" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps({
  position: {
    type: Object,
    default: { lat: 35.32170486450195, lng: 127.46190643310547 }
  },
  title: {
    type: String,
    default: "title"
  }
});

const mapRef = ref(null);

onMounted(async () => {
  const config = useRuntimeConfig();
  const loader = new Loader({
    apiKey: config.public.apiKey,
    version: "weekly"
  });

  await loader.load();
  const { Map, Marker } = await google.maps.importLibrary("maps");

  const map = new Map(mapRef.value, {
    center: props.position,
    zoom: 14
  });

  new Marker({
    map: map,
    position: props.position,
    title: props.title
  });
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 56.25%;
}
</style>
