<template>
  <section class="section-faq">
    <header-section> 자주 묻는 질문 </header-section>
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
                <div class="content">
                  <strong>A.</strong>
                  <p class="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                    totam laborum delectus nulla fugit non autem, quibusdam
                    optio sunt voluptates odit dignissimos, ipsam at cum
                    possimus nobis unde error consequatur?
                  </p>
                </div>
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
        @apply border-t-0 border-grayscale-800;
      }
      &:last-child {
        @apply border-b-0;
      }
      .faq {
        /* 질문영역 */
        .faq-header {
          @apply px-2 py-4 border-collapse relative overflow-hidden transition-all-default;
          &::before {
            @apply absolute top-[50%] left-[50%] w-full h-0 py-20  block bg-classic-rose-200 opacity-0;
            z-index: -1;
            content: "";
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            transform: translate(-300%, -50%);
          }
          &:hover {
            @apply text-hawkes-blue-600;
            &:before {
              @apply opacity-100;
              transform: translate(-50%, -50%);
            }
          }
          .faq-q {
            @apply flex items-start container;
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
            @apply border-t border-grayscale-800 transition-all-default;
            max-height: 0;
            transition-duration: 0.5s;
            overflow: hidden;
            .collapse-content {
              @apply h-0 border-b border-grayscale-800;
            }
          }
          .collapse-content {
            @apply text-grayscale-900 bg-baja-white-100;
            .content {
              @apply container flex items-start;
              strong {
                @apply px-2 py-4 text-lg md:text-xl font-bold;
              }
              p.text {
                @apply px-2 py-4 text-lg md:text-xl;
              }
            }
          }
        }
        /* 열렸을때 */
        &.shown {
          .faq-header {
            @apply text-hawkes-blue-600;
            &:before {
              @apply h-full opacity-100;
              transform: translate(-50%, -50%);
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
