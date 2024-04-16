<!-- 
  ### 5. IA 관련

1. ✅ 히어로
2. ✅ ATC 브랜드 설명
3. 💬 컨퍼런스 참여방법 | ***CONFERENCE 섹션***
    1. 내국인/외국인 구분하여 행사 예약 플랫폼 통해서 컨퍼런스 모객예정, 이메일 수집 없이 특정 URL로 이동하는 CTA로 변경
        1. 내국인 대상 → [이벤터스](https://www.event-us.kr/1986production/event/79474?utm_source=eventus&utm_medium=organic&utm_campaign=search-result&utm_term=%ED%8A%B8%EB%A0%88%EC%9D%BC)
        2. 외국인 대상 → [evnetbrite](https://www.eventbrite.com/e/5th-asia-trails-conference-tickets-873734773227?aff=oddtdtcreator)
4. 💬 (추가) 워킹페스티벌 소식받기 | ***WORKING FESTIVAL 섹션***
    1. 10월에 워킹페스티벌이 진행 될 예정
    2. 워킹페스티벌에 대한 간략 설명 및 얼리버드 쿠폰 및 행사 업데이트 소식을 알려 주기위한 이메일 CTA 섹션 추가
5. 💬 스폰서 안내 및 스폰하기 | ***SPONSORS 섹션***
    1. 스폰서 띄워주는 부분 너무 좋습니다.
    2. (추가) 우리에게 스폰하면 간략하게 이러이러한 혜택을 줄 수 있을 것 같아, 상세한 내용 확인하거나 우리랑 미팅잡아볼래?
    3. 디테일 페이지 이동 CTA
6. ✅  FAQ
7. ✅  풋터

### 6. 상단메뉴

1. Home
2. 컨퍼런스 → 비활성화, 추후 디테일 페이지로
3. 워킹페스티벌 → 비활성화, 추후 디테일 페이지로
4. 스폰서 → 활성화, 디테일 페이지 필요
    1. https://atcjirisan.com/together 해당 페이지 내 스폰서쉽 혜택 테이블 노출
        1. 외부협력 담당자님이 혜택 테이블을 수정할 수 있도록 구글시트 연결이라던지, 그런게 가능 할까요? 관리자 페이지는 너무 작업량이 많을 것 같아서요.
    2. 그외 내용은 스폰서쉽 전용 FAQ 섹션으로 
    3. https://atcjirisan.com/26 문의메일 및 미팅예약 가능하도록

-->

<template>
  <div>
    <!-- 히어로 -->
    <section-hero />
    <section-marquee />

    <!-- 정보 섹션 -->
    <section-infos></section-infos>
    <!-- marquee -->

    <!-- 지리산 정보 -->
    <section-scroll-horizontal :items="items">
      <template #title>
        <!-- <header-section>  -->
        지리산에서의 ATC
        <!-- </header-section> -->
      </template>
    </section-scroll-horizontal>
    <!-- 컨퍼런스 -->
    <!-- <section-conference /> -->
    <!-- 워킹 페스티벌 -->
    <!-- <section-festival /> -->
    <section-subscribe />
    <section-marquee />
    <!-- 참여 -->
    <!-- <section-subscribe-form /> -->

    <!-- 스폰서 -->
    <section-sponsors />
    <!-- 스폰서 혜택 -->
    <section-sponsor-benefits />
    <section-marquee />
    <!-- faq -->
    <section-faq />
    <!-- marquee -->
    <section-marquee />
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "지리산이 속삭이는생명, 평화, 공존의 메세지"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "대한민국 최초·최대 국립공원",
      paragraph:
        "1967년 대한민국 1호 국립공원 지정 총 면적 483km² 대한민국 최대 국립공원 (여의도 면적의 57.5배)"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "우리나라 최다 생물종 서식지",
      paragraph:
        "국내 국립공원 중 최다 생물종(8,869종) 서식지 반달곰 등 멸종위기 129종 서식지(2023년)"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "우리나라 최초 도보여행 순례길",
      paragraph:
        "2007년 대한민국 최초 장거리 도보여행 순례길 조성 / 2021년 대한민국 1호 국가숲길 지정"
    }
  },
  {
    src: "/images/dummy.jpeg",
    description: {
      title: "우리나라 최대 트래킹 성지",
      paragraph:
        "지리산둘레길 이용객수 616만명 (2023년 누적) / 총 길이 289.4km 순례자(완주자) 2,988명 (2023년 누적)"
    }
  }
]);
</script>

<style lang="postcss" scoped></style>
