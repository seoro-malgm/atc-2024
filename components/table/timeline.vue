<template>
  <div class="container overflow-x-auto">
    <table class="time-table">
      <thead>
        <tr>
          <th width="15%">시간</th>
          <th width="70%">주제</th>
          <th width="15%">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="time">09:00 ~</td>
          <td>{{ $t("program_timetable__desc01") }}</td>
          <td class="text-center">
            <!-- 30 {{ $t("word__time_min") }} -->
          </td>
        </tr>
        <tr>
          <td class="time">10:10 - 10:30</td>
          <td>{{ $t("program_timetable__desc02") }}</td>
          <td class="text-center">20 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">10:30- 10:35</td>
          <td>{{ $t("program_timetable__desc03") }}</td>
          <td class="text-center">5 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">10:35 - 10:40</td>
          <td>
            {{ $t("program_timetable__desc04") }}
          </td>
          <td class="text-center">5 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">10:40 - 10:45</td>
          <td>{{ $t("program_timetable__desc05") }}</td>
          <td class="text-center">5 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">10:45 - 10:55</td>
          <td>{{ $t("program_timetable__desc06") }}</td>
          <td class="text-center">10 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">10:55 - 11:10</td>
          <td>{{ $t("program_timetable__desc07") }}</td>
          <td class="text-center">15 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">11:10 - 11:20</td>
          <td>
            {{ $t("program_timetable__desc08") }}
          </td>
          <td class="text-center">10 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td rowspan="6" class="time">11:10 - 12:20</td>
        </tr>
        <tr>
          <td colspan="2" class="subject">
            {{ $t("program_timetable__desc09") }}
          </td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[0].id)"
              @select="selected = $event"
            />
          </td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[1].id)"
              @select="selected = $event"
            />
          </td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc10") }}</td>
          <td class="text-center">20 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc11") }}</td>
          <td class="text-center">10 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td class="time">12:50 - 14:00</td>
          <td>{{ $t("program_timetable__desc12") }}</td>
          <td class="text-center">70 {{ $t("word__time_min") }}</td>
        </tr>

        <tr>
          <td rowspan="6" class="time">14:00 - 15:30</td>
        </tr>
        <tr>
          <td colspan="2" class="subject">
            {{ $t("program_timetable__desc13") }}
          </td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[2].id)"
              @select="selected = $event"
            />
          </td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[3].id)"
              @select="selected = $event"
            />
          </td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc14") }}</td>
          <td class="text-center">20 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc15") }}</td>
          <td class="text-center">10 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td rowspan="6" class="time">15:30 - 17:00</td>
        </tr>
        <tr>
          <td colspan="2" class="subject">
            {{ $t("program_timetable__desc16") }}
          </td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[4].id)"
              @select="selected = $event"
            />
          </td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[5].id)"
              @select="selected = $event"
            />
          </td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc17") }}</td>
          <td class="text-center">20 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc18") }}</td>
          <td class="text-center">10 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td rowspan="5" class="time">17:00 - 18:30</td>
        </tr>
        <tr>
          <td colspan="2" class="subject">
            {{ $t("program_timetable__desc19") }}
          </td>
        </tr>
        <tr>
          <td>
            <table-cell
              :data="getItem(items[6].id)"
              @select="selected = $event"
            />
          </td>

          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>

        <tr>
          <td>
            <table-cell
              :data="getItem(items[7].id)"
              @select="selected = $event"
            />
          </td>

          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>
        <tr>
          <td>{{ $t("program_timetable__desc20") }}</td>
          <td class="text-center">30 {{ $t("word__time_min") }}</td>
        </tr>

        <tr>
          <td class="time">18:30 - 20:00</td>
          <td colspan="2">{{ $t("program_timetable__desc21") }}</td>
        </tr>
      </tbody>
    </table>
    <modal-speaker :selected="selected" @close="selected = null" />
  </div>
</template>

<script setup>
import spkeakerList from "@/data/speakerList.json";
const items = computed(() => {
  return spkeakerList;
});

const emit = defineEmits();

const { t } = useI18n();
const getItem = id => {
  const title = t(`${id}_title`);
  const name = t(`${id}_name`);
  const nameEn = t(`${id}_name_en`);
  const company = t(`${id}_company`);
  const position = t(`${id}_position`);
  const { subjectImage, image, thumbnail } = items.value.find(
    item => item.id === id
  );
  return {
    id,
    title,
    name,
    nameEn,
    company,
    position,
    subjectImage,
    image,
    thumbnail
  };
};

const selected = ref(null);
</script>

<style lang="postcss" scoped>
.time-table {
  @apply max-w-full overflow-x-auto lg:mt-10;
  table {
    @apply w-full border-collapse;
    th,
    td {
      @apply border border-gray-300 p-2;
      @apply text-base lg:text-xl;
      &.time {
        @apply font-bold text-center align-middle max-lg:text-sm;
        word-break: keep-all;
        vertical-align: top;
      }
      &.subject {
        @apply bg-grayscale-900 text-white text-center text-lg  py-2;
      }
      &.note {
        @apply text-center;
      }
    }
    th {
      @apply bg-gray-800 text-white font-bold;
    }

    .title-row td {
      @apply bg-gray-700 text-white font-bold text-center py-3;
    }
  }
}
</style>
