<template>
  <div id="programs">
    <section-introduction :hideHeader="true" />

    <section class="mt-24 lg:mt-48">
      <header-section>{{ $t("program_timetable__title") }}</header-section>
      <div class="time-table container mx-auto my-24">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th>{{ $t("program_timetable__time") }}</th>
              <th width="65%">{{ $t("program_timetable__subject") }}</th>
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
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc05") }}</td>
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc06") }}</td>
              <td class="note">(20 min.)</td>
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
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc10") }}</td>
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc11") }}</td>
              <td class="note">(30 min.)</td>
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
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc14") }}</td>
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc15") }}</td>
              <td class="note">(30 min.)</td>
            </tr>

            <tr>
              <td colspan="4" class="subject">
                <!-- {{ $t("program_timetable__desc17") }} -->
                {{ $t("program_timetable__desc16") }}
              </td>
            </tr>
            <tr>
              <td rowspan="3" class="time">16:30 - 17:50</td>
            </tr>
            <tr>
              <td>{{ $t("program_timetable__desc18") }}</td>
              <td class="note">(30 min.)</td>
            </tr>
            <tr>
              <td>
                <pre>{{ $t("program_timetable__desc19") }}</pre>
              </td>
              <td class="note">(30 min.)</td>
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
        {{ $t("program_subject__title") }}
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
    src: "dummy.png",
    description: {
      title: "program_subject_item01_subtitle",
      paragraph: "program_subject_item01_desc"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "program_subject_item02_subtitle",
      paragraph: "program_subject_item02_desc"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "program_subject_item03_subtitle",
      paragraph: "program_subject_item03_desc"
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "program_subject_item04_subtitle",
      paragraph: "program_subject_item04_desc"
    }
  }
]);
</script>

<style lang="postcss" scoped>
.time-table {
  @apply container mx-auto px-4 my-24;

  table {
    @apply w-full border-collapse;

    thead {
      th {
        @apply bg-grayscale-800 text-white p-4 text-center text-lg;
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
        @apply border-y border-grayscale-800 p-4 text-lg lg:text-2xl text-left;
        pre {
          @apply text-left;
        }
        h6 {
          @apply font-bold;
        }
        &.time {
          @apply text-2xl lg:text-3xl font-bold text-center align-middle border-r border-grayscale-800;
        }
        &.note {
          @apply text-center border-l;
        }
        &.subject {
          @apply bg-grayscale-950 text-white text-center text-lg lg:text-xl py-2;
        }
      }
    }
  }
}
</style>
