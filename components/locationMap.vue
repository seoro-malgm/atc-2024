<template>
  <div id="map" ref="mapRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps({
  position: {
    type: Object,
    default: () => ({ lat: 35.32170486450195, lng: 127.46190643310547 })
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
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new Map(mapRef.value, {
    center: props.position,
    zoom: 13,
    mapId: config.public.mapId
  });

  new AdvancedMarkerElement({
    position: props.position,
    map: map,
    title: props.title
    // styles: mapStyles
  });
});
</script>

<style scoped>
#map {
  @apply absolute-center w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
</style>
