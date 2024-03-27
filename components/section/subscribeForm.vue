<template>
  <section class="section-subscribe">
    <header-section class="border-b"> SUBSCRIBE </header-section>
    <!-- <subscribe-form /> -->
    <div class="wrap">
      <div class="form-wrap">
        <form action="submit" @submit.prevent="onSubmit" class="form">
          <header class="form-header">
            <h5>사전예약하세요</h5>
            <p class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eaque repellat explicabo deserunt molestias. Earum
              ullam obcaecati fugit laborum rem cum excepturi molestiae dolor
              aut odio perferendis distinctio delectus vitae, fuga laboriosam
              sed minima. Necessitatibus, rerum! Natus, dignissimos.
            </p>
          </header>
          <section class="form-body">
            <form-input-text
              :form="form"
              bind="email"
              @input="$event => (form.email = $event)"
              title="이메일"
            />
          </section>
          <footer class="form-footer">
            <button type="submit" class="btn-submit">등록</button>
          </footer>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const form = ref({
  email: null
});
const toast = useToast();
const onSubmit = e => {
  toast.add({
    id: "submitted",
    title: `등록이 완료되었습니다.`,
    // description: error.data.message || "에러가 발생하였습니다.",
    icon: "ic:baseline-check-circle",
    color: "spring-green"
  });
};
</script>

<style lang="postcss" scoped>
.section-subscribe {
  /* @apply pb-20; */
  .wrap {
    @apply flex items-center justify-center py-28 bg-baja-white-100;
    .form-wrap {
      @apply w-10/12 lg:w-5/12 border bg-white;
      .form {
        .form-header {
          @apply p-4 border-b;
          h5 {
            @apply text-lg lg:text-2xl font-bold;
          }
          p {
            @apply lg:text-lg mt-2;
          }
        }
        .form-body {
          @apply px-4 py-10;
        }
        .form-footer {
          @apply text-center border-t;
          .btn-submit {
            @apply w-full p-4 bg-transparent hover:bg-spring-green-400 transition-all text-lg lg:text-xl font-bold;
          }
        }
      }
    }
  }
}
</style>
