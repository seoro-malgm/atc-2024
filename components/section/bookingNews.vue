<template>
  <div>
    <section-marquee class="block xl:hidden" />
    <section id="section-booking-news" class="grid grid-cols-12">
      <div
        class="col-span-12 xl:col-span-9 border-t border-grayscale-800 bg-blue-600"
      >
        <div class="w-full my-auto pb-2">
          <logo-symbol-large class="hidden xl:block" duration="800" />
          <div class="hidden xl:block px-6 py-8 pb-4">
            <nuxt-img
              src="/lettertype-full-eng.svg"
              provider="defaultProvider"
              alt="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
              title="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
            />
          </div>
        </div>
      </div>
      <div
        class="col-span-12 xl:col-span-3 bg-blue-600 max-xl:py-[10rem] xl:py-8"
      >
        <header class="section-header">
          <h3 class="title">
            <pre>{{ $t("main_book__title") }}</pre>
            <div>{{ dayCount }}</div>
          </h3>
          <pre class="desc">{{ $t("main_book__desc") }}</pre>
        </header>

        <section class="cta max-xl:text-center">
          <button @click="$emit('modal-subscribe', true)" class="btn-cta">
            <span> {{ $t("main_book__btn") }} </span>
          </button>
        </section>
      </div>
    </section>
    <section-marquee class="block xl:hidden" />
  </div>
</template>

<script setup>
const dayCount = computed(() => {
  const today = new Date();
  const targetDate = new Date("2024-08-15");
  const timeDiff = targetDate - today;
  const day = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (day <= 0) {
    return "D-DAY";
  }
  return `D-${day}`;
});
</script>

<style lang="postcss" scoped>
#section-booking-news {
  .section-header {
    @apply text-white px-8 xl:px-14 max-xl:text-center;
    .title {
      @apply text-5xl lg:text-[4rem] font-extrabold mb-4;
      line-height: 1.3;
    }
    pre {
      @apply text-white;
    }
  }
  section.cta {
    @apply mt-8 px-14;

    .btn-cta {
      @apply px-5 py-3 bg-green-300;
      span,
      .icon {
        @apply inline-block transition-all-default font-semibold text-xl;
      }
      .icon {
        @apply text-2xl mt-[-3px] ml-1;
      }
      &:hover {
        span {
          transform: skew(-15deg);
        }
        .icon {
          transform: translate(4px, -4px);
        }
      }
    }
  }
}
</style>
