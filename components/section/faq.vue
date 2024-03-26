<template>
  <section class="section-faq">
    <header-section> FAQ </header-section>
    <ul class="faq-list">
      <li v-for="i in faqs" class="faq-item">
        <article class="faq" :class="{ shown: shown === i }">
          <header class="faq-header">
            <button role="button" class="faq-q" @click="toggle(i)">
              <strong>Q.</strong>
              <span class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit?
                {{ i }}
              </span>
            </button>
          </header>
          <section class="faq-a">
            <div class="faq-collapse">
              <div class="collapse-content">
                <strong>A.</strong>
                <p class="text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  totam laborum delectus nulla fugit non autem, quibusdam optio
                  sunt voluptates odit dignissimos, ipsam at cum possimus nobis
                  unde error consequatur?
                </p>
              </div>
            </div>
          </section>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
const faqs = ref(12);

const shown = ref(null);

const toggle = index => {
  if (index === shown.value) {
    shown.value = null;
  } else {
    shown.value = index;
  }
};
</script>

<style lang="postcss" scoped>
.section-faq {
  .faq-list {
    .faq-item {
      &:first-child {
        @apply border-t;
      }
      &:last-child {
        @apply border-b-0;
      }
      .faq {
        /* 질문영역 */
        .faq-header {
          @apply px-2 py-3 border-collapse relative overflow-hidden;
          transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          &::before {
            @apply absolute top-[50%] left-[50%] w-full h-0 block bg-classic-rose-200 opacity-0;
            z-index: -1;
            content: "";
            transform: translate(-50%, -50%);
            transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
          &:hover {
            @apply text-hawkes-blue-600;
            &:before {
              @apply py-20 opacity-100;
            }
          }
          .faq-q {
            @apply flex items-start;
            strong {
              @apply text-lg md:text-xl font-bold mr-2 text-hawkes-blue-600;
            }
            span.text {
              @apply px-2 text-lg md:text-xl font-bold text-left;
            }
          }
        }
        /* 답변영역 */
        .faq-a {
          .faq-collapse {
            @apply border-t;
            max-height: 0;
            transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
            overflow: hidden;
            .collapse-content {
              @apply h-0 border-b;
            }
          }
          .collapse-content {
            @apply flex items-start text-black bg-baja-white-100;
          }
          strong {
            @apply p-2 text-lg md:text-xl font-bold;
          }
          p.text {
            @apply p-2 text-lg md:text-xl;
          }
        }
        /* 열렸을때 */
        &.shown {
          .faq-header {
            @apply text-hawkes-blue-600;
            &:before {
              @apply h-full opacity-100;
            }
          }
          .faq-a {
            .faq-collapse {
              max-height: 500px;
              .collapse-content {
                height: inherit;
              }
            }
          }
        }
      }
    }
  }
}
</style>
