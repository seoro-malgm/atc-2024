<UCarousel
  v-slot="{ item }"
  :items="items"
  class="overflow-hidden"
  :ui="{
    item: 'basis-full'
  }"
  :prev-button="{
    icon: 'bxs:chevron-left',
    class: 'text-2xl lg:text-5xl rounded-none',
    color: 'spring-green'
  }"
  :next-button="{
    icon: 'bxs:chevron-right',
    class: 'text-2xl lg:text-5xl rounded-none',
    color: 'spring-green'
  }"
  arrows
  indicators
>
          <template #default="{ item }">
            <img :src="item" class="w-full" draggable="false" />
          </template>
          <template #prev="{ onClick, disabled }">
            <button @click="onClick">Prev</button>
          </template>

          <template #next="{ onClick, disabled }">
            <button @click="onClick">Next</button>
          </template>
        </UCarousel>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
</script>

<style lang="postcss" scoped></style>
