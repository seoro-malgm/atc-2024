<template>
  <div class="container mx-auto py-24">
    <header class="px-8 mb-12">
      <h1 class="text-3xl font-bold">약관</h1>
    </header>
    <ul>
      <li class="mb-24 pb-24 border-b px-8">
        <dt class="mb-2">
          <a href="#privacy">
            <h4 class="text-2xl font-bold text-hawkes-blue-600">
              개인정보 수집 및 이용
            </h4>
          </a>
        </dt>
        <dd>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          obcaecati, quisquam aperiam sunt fuga hic placeat eum, magnam numquam
          corporis blanditiis atque, maxime consectetur et facere ut minima esse
          officiis nostrum nulla? Neque quis perspiciatis commodi est
          praesentium accusantium, consectetur eius laborum quas officiis
          eveniet optio iure ratione tempore molestias debitis voluptatem esse
          laudantium laboriosam? Expedita corporis cumque et, necessitatibus
          quibusdam fugiat porro obcaecati quam commodi at pariatur accusamus
          nihil amet ab aliquid ducimus eligendi ea itaque quas earum ut minus!
          Id consequuntur dolores repudiandae numquam molestias rem, praesentium
          dicta ab impedit dolor voluptatibus sapiente hic! Nulla tempora fugit,
          nesciunt illum voluptatibus mollitia numquam accusantium, accusamus
          aliquam quibusdam odio corporis assumenda natus! Sint eum, explicabo
          debitis error cum natus illo dolore illum harum qui pariatur veniam
          minima nulla ea hic doloribus, quae sunt tempore eaque magni quibusdam
          earum! Aliquid saepe quia expedita ipsum dolore debitis quis nisi
          asperiores similique accusamus facilis ad voluptatem dolorum ut enim
          labore corrupti obcaecati quam deserunt, eveniet vel aperiam esse.
          Mollitia atque consequatur natus voluptas architecto, ipsum quisquam
          omnis, quo quidem ratione deleniti. Odit numquam rerum iure. Magni
          obcaecati, assumenda quae deserunt similique, vero necessitatibus
          possimus, veritatis praesentium voluptates optio suscipit. Ducimus
          molestiae vel in.
        </dd>
      </li>
      <li class="mb-24 pb-24 border-b px-8">
        <dt class="mb-2">
          <a href="#ad_agree">
            <h4 class="text-2xl font-bold text-hawkes-blue-600">
              광고성 정보 수신
            </h4>
          </a>
        </dt>
        <dd>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          obcaecati, quisquam aperiam sunt fuga hic placeat eum, magnam numquam
          corporis blanditiis atque, maxime consectetur et facere ut minima esse
          officiis nostrum nulla? Neque quis perspiciatis commodi est
          praesentium accusantium, consectetur eius laborum quas officiis
          eveniet optio iure ratione tempore molestias debitis voluptatem esse
          laudantium laboriosam? Expedita corporis cumque et, necessitatibus
          quibusdam fugiat porro obcaecati quam commodi at pariatur accusamus
          nihil amet ab aliquid ducimus eligendi ea itaque quas earum ut minus!
          Id consequuntur dolores repudiandae numquam molestias rem, praesentium
          dicta ab impedit dolor voluptatibus sapiente hic! Nulla tempora fugit,
          nesciunt illum voluptatibus mollitia numquam accusantium, accusamus
          aliquam quibusdam odio corporis assumenda natus! Sint eum, explicabo
          debitis error cum natus illo dolore illum harum qui pariatur veniam
          minima nulla ea hic doloribus, quae sunt tempore eaque magni quibusdam
          earum! Aliquid saepe quia expedita ipsum dolore debitis quis nisi
          asperiores similique accusamus facilis ad voluptatem dolorum ut enim
          labore corrupti obcaecati quam deserunt, eveniet vel aperiam esse.
          Mollitia atque consequatur natus voluptas architecto, ipsum quisquam
          omnis, quo quidem ratione deleniti. Odit numquam rerum iure. Magni
          obcaecati, assumenda quae deserunt similique, vero necessitatibus
          possimus, veritatis praesentium voluptates optio suscipit. Ducimus
          molestiae vel in.
        </dd>
      </li>
    </ul>
  </div>
</template>

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
