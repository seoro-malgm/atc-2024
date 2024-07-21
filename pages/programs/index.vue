<template>
  <div id="programs">
    <header-section>
      {{ $t("program_subject__title") }}
    </header-section>
    <section-introduction :hideHeader="true" />

    <section class="mt-24 lg:mt-48">
      <header-section>{{ $t("program_timetable__title") }}</header-section>
      <div class="time-table">
        <header class="lg:hidden">
          SCROLL
          <icon-arr dir="right" color="transparent" fill="black" class="icon" />
        </header>
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th>{{ $t("program_timetable__time") }}</th>
              <th>{{ $t("program_timetable__subject") }}</th>
              <th>{{ $t("program_timetable__note") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="time">10:00 - 10:05</td>
              <td>{{ $t("program_timetable__desc01") }}</td>
              <td class="border-l"></td>
            </tr>
            <tr>
              <td class="time">10:05 - 10:20</td>
              <td>{{ $t("program_timetable__desc02") }}</td>
              <td class="border-l"></td>
            </tr>
            <tr>
              <td colspan="4" class="subject">
                {{ $t("program_timetable__desc03") }}
              </td>
            </tr>
            <tr>
              <td rowspan="4" class="time">10:30 - 11:50</td>
            </tr>
            <tr>
              <td>
                <pre>{{ $t("program_timetable__desc04") }}</pre>
              </td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc05") }}</td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc06") }}</td>
              <td class="note">(20 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td class="time">12:00 - 13:30</td>
              <td>{{ $t("program_timetable__desc07") }}</td>
              <td class="border-l"></td>
            </tr>
            <tr>
              <td colspan="4" class="subject">
                {{ $t("program_timetable__desc08") }}
              </td>
            </tr>
            <tr>
              <td rowspan="4" class="time">13:30 - 14:50</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc09") }}</td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc10") }}</td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc11") }}</td>
              <td class="note">(20 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td colspan="4" class="subject">
                {{ $t("program_timetable__desc12") }}
              </td>
            </tr>
            <tr>
              <td rowspan="4" class="time">15:00 - 16:20</td>
            </tr>
            <tr>
              <td>
                <pre>{{ $t("program_timetable__desc13") }}</pre>
              </td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc14") }}</td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc15") }}</td>
              <td class="note">(20 {{ $t("word__time_min") }})</td>
            </tr>

            <tr>
              <td colspan="4" class="subject">
                <!-- {{ $t("program_timetable__desc17") }} -->
                {{ $t("program_timetable__desc16") }}
              </td>
            </tr>
            <tr>
              <td rowspan="4" class="time">16:30 - 17:50</td>
            </tr>

            <tr>
              <td>
                <pre>{{ $t("program_timetable__desc17") }}</pre>
              </td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc18") }}</td>
              <td class="note">(30 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td>
                <pre>{{ $t("program_timetable__desc19") }}</pre>
              </td>
              <td class="note">(20 {{ $t("word__time_min") }})</td>
            </tr>
            <tr>
              <td class="time">18:00 - 20:00</td>
              <td>{{ $t("program_timetable__desc20") }}</td>
              <td class="border-l"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12 lg:mt-48">
      <header-section class="border-b-0">
        {{ $t("program_subject__topic") }}
      </header-section>
      <div>
        <section-scroll-horizontal
          :items="subjects"
          :headerHeight="headerHeight"
        />
      </div>
    </section>
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
.time-table {
  @apply lg:container lg:mx-auto px-4 mx-4 mt-10 max-lg:pb-8 lg:my-24 max-w-full overflow-x-auto;
  header {
    @apply flex items-center lg:hidden;
    .icon {
      @apply w-8 h-8;
    }
  }

  table {
    @apply w-full border-collapse lg:container mx-auto mb-2;
    thead {
      th {
        @apply bg-grayscale-800 text-white p-2 lg:p-4 text-center text-sm lg:text-lg;
      }
    }

    tbody {
      tr:nth-child(even) {
        @apply bg-gray-100;
      }
      tr:nth-child(odd) {
        @apply bg-white;
      }
      td {
        @apply border-y border-grayscale-800 p-2 lg:p-4 text-base lg:text-2xl text-left text-nowrap;
        pre {
          @apply text-left;
        }
        h6 {
          @apply font-bold;
        }
        &.time {
          @apply text-base lg:text-3xl font-bold text-center align-middle border-r border-grayscale-800;
        }
        &.note {
          @apply text-center border-l;
        }
        &.subject {
          @apply bg-grayscale-950 text-white text-center text-base lg:text-xl py-2;
        }
      }
    }
  }
}
</style>
