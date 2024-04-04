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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur necessitatibus omnis, aliquam accusantium quaerat
                    minus incidunt tempore vel dolore esse consectetur eligendi
                    consequuntur quia voluptas illo vero, magni alias! At,
                    soluta. Animi, voluptate tenetur. Possimus recusandae ullam
                    autem doloremque, nesciunt reprehenderit qui. Aliquam,
                    minima voluptatibus vero porro numquam perferendis alias
                    dolore quos consectetur aut autem fugiat sit, eligendi nemo.
                    Hic laborum maiores, doloremque ab quibusdam ullam quis
                    minima nostrum dicta quo incidunt similique praesentium
                    officia cupiditate maxime inventore magnam dignissimos odit
                    rem ea aliquid. Odit autem dignissimos eaque recusandae!
                    Excepturi veritatis iure atque, reiciendis praesentium id
                    nesciunt quisquam assumenda eligendi ut odio obcaecati
                    facere perspiciatis mollitia laborum aliquam. Sit deserunt
                    eligendi commodi ab sint dolore quidem quia magni iusto
                    autem mollitia perferendis reprehenderit, natus adipisci at
                    quibusdam velit. Consectetur quae maiores tenetur fugiat
                    sint facere blanditiis iusto consequuntur, perspiciatis
                    explicabo dolorem sed cumque dolor tempora minus a commodi
                    fuga saepe vero ratione quod magnam. Delectus quas suscipit
                    debitis veniam eos unde architecto, voluptates reprehenderit
                    exercitationem quisquam velit fugit deleniti similique
                    dolore eaque error autem voluptas fuga nisi vel! Distinctio
                    in eius reprehenderit saepe doloribus ut odio vero, ratione
                    veniam nulla natus ipsum doloremque. Corporis, distinctio
                    repudiandae omnis nihil eius quod?
                  </p>
                </div>
                <span class="block border-t border-grayscale-800 -mt-1" />
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
            transition-duration: 0.4s;
            overflow: hidden;
            .collapse-content {
              @apply h-0 border-grayscale-800;
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
              max-height: 40rem;
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
