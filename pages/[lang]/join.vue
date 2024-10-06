<template>
  <div>
    <header-section class="mt-4">
      {{ t("join_section__title") }}
    </header-section>
    <section-join />
  </div>
</template>

<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: null
  }
});
const emit = defineEmits();

// locale
const { t, locale } = useI18n();
const currentLocale = computed(() => {
  return props.lang || locale.value || "ko";
});
// 언어 코드에 따른 HTML lang 속성 매핑

const htmlLang = computed(() => {
  const langMap = {
    ko: "ko-KR",
    en: "en-US",
    ja: "ja-JP",
    tw: "zh-TW"
  };
  return langMap[locale.value] || "ko-KR";
});

// current head
const currentHead = computed(() => {
  return {
    title: "2024 지리산둘레길 걷기축제 | 제 5회 아시아 트레일즈 컨퍼런스",
    htmlAttrs: {
      lang: htmlLang.value
    },
    meta: [
      {
        name: "description",
        content:
          "2024년 10월 26일, 지리산의 아름다운 가을을 만끽할 수 있는, 모두를 위한 신나는 지리산둘레길 걷기축제에 여러분들을 초대합니다! 지리산둘레길을 사랑하는 사람부터 트래킹 전문가까지 모두를 만족시킬 수 있는 4가지의 프로그램이 준비되어 있답니다."
      },
      {
        property: "og:title",
        content: "2024 지리산둘레길 걷기축제 | 제 5회 아시아 트레일즈 컨퍼런스"
      },
      {
        property: "og:description",
        content:
          "2024년 10월 26일, 지리산의 아름다운 가을을 만끽할 수 있는, 모두를 위한 신나는 지리산둘레길 걷기축제에 여러분들을 초대합니다! 지리산둘레길을 사랑하는 사람부터 트래킹 전문가까지 모두를 만족시킬 수 있는 4가지의 프로그램이 준비되어 있답니다."
      },
      {
        property: "og:image",
        content: "https://atcjirisan.com/og-image__festival.png"
      },
      {
        property: "og:url",
        content: `https://atcjirisan.com/${currentLocale.value}/join`
      },
      {
        name: "twitter:image",
        content: "https://atcjirisan.com/og-image__festival.png"
      },
      {
        property: "og:site_name",
        content: "2024 지리산둘레길 걷기축제 | 제 5회 아시아 트레일즈 컨퍼런스"
      },
      {
        name: "msapplication-tooltip",
        content: "2024 지리산둘레길 걷기축제 | 제 5회 아시아 트레일즈 컨퍼런스"
      },
      {
        name: "application-name",
        content: "2024 지리산둘레길 걷기축제 | 제 5회 아시아 트레일즈 컨퍼런스"
      },
      {
        property: "twitter:domain",
        content: `https://atcjirisan.com/${currentLocale.value}/join`
      },
      {
        property: "twitter:url",
        content: `https://atcjirisan.com/${currentLocale.value}/join`
      },
      {
        name: "twitter:description",
        content:
          "2024년 10월 26일, 지리산의 아름다운 가을을 만끽할 수 있는, 모두를 위한 신나는 지리산둘레길 걷기축제에 여러분들을 초대합니다! 지리산둘레길을 사랑하는 사람부터 트래킹 전문가까지 모두를 만족시킬 수 있는 4가지의 프로그램이 준비되어 있답니다."
      },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    link: [
      {
        rel: "canonical",
        href: `https://atcjirisan.com/${currentLocale.value}/join`
      }
    ]
  };
});

// useHead
useHead(currentHead.value);
</script>

<style lang="postcss" scoped></style>
