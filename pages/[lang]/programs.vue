<template>
  <div id="programs">
    <!-- <header-section>
      {{ $t("program_subject__title") }}
    </header-section> -->
    <!-- <section-introduction :hideHeader="true" /> -->

    <section class="">
      <header-section>{{ $t("program_timetable__title") }}</header-section>
      <div class="time-table">
        <!-- <header class="flex items-center justify-center lg:hidden">
          SCROLL
          <div class="w-10 h-10">
            <icon-arr
              dir="right"
              color="transparent"
              fill="black"
              class="icon"
            />
          </div>
        </header> -->
        <table-timeline />
      </div>
    </section>

    <section class="mt-12 lg:mt-48">
      <header-section class="border-b-0">
        {{ $t("program_subject__topic") }}
      </header-section>
      <div
        class="border-b-0 pt-8 conteinr text-center text-xl lg:text-4xl font-bold max-xl:pb-10"
      >
        "{{ $t("main_intro_item01_subtitle") }}"
      </div>
      <div>
        <section-scroll-horizontal
          :items="subjects"
          :headerHeight="headerHeight"
        />
      </div>
    </section>

    <section class="mt-12 lg:mt-48">
      <header-section class="border-b-0"> 컨퍼런스 참여하기 </header-section>
      <div class="ifame-wrap">
        <iframe
          src="https://www.youtube.com/embed/-NtVu5osxHE?si=AupCgH9DOVwNUGG2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </section>

    <!-- 소식 구독 예약하기 -->
    <section-booking-news @modal-subscribe="$emit('modal-subscribe', true)" />
  </div>
</template>

<script setup>
const props = defineProps({
  headerHeight: {
    type: [Number, String],
    default: 0
  }
});

const subjects = reactive([
  {
    src: "/conferenc_subjects/subject_0.png",
    description: {
      title: "program_subject_item01_subtitle",
      paragraph: "program_subject_item01_desc"
    }
  },
  {
    src: "/conferenc_subjects/subject_1.png",
    description: {
      title: "program_subject_item02_subtitle",
      paragraph: "program_subject_item02_desc"
    }
  },
  {
    src: "/conferenc_subjects/subject_2.png",
    description: {
      title: "program_subject_item03_subtitle",
      paragraph: "program_subject_item03_desc"
    }
  },
  {
    src: "/conferenc_subjects/subject_3.png",
    description: {
      title: "program_subject_item04_subtitle",
      paragraph: "program_subject_item04_desc"
    }
  }
]);
</script>

<style lang="postcss" scoped>
.ifame-wrap {
  @apply max-lg:container max-w-full;
  iframe {
    @apply w-full h-[calc(100vw*0.5625)];
  }
}
</style>
