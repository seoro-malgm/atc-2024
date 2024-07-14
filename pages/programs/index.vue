<template>
  <div id="programs">
    <section-introduction :hideHeader="true" />

    <section class="mt-24 lg:mt-48">
      <header-section>타임테이블</header-section>
      <div class="time-table container mx-auto my-24">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th>시간</th>
              <th>주제</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="time">10:00 - 10:05</td>
              <td>개회사</td>
              <td></td>
            </tr>
            <tr>
              <td class="time">10:05 - 10:20</td>
              <td>기조연설</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4" class="time">10:30 - 11:50</td>
              <td>지속 가능한 트레일 운영을 위한 민관협력 정책</td>
            </tr>
            <tr>
              <td>
                <h6>브렌다 얀코비아크 (Brenda Yankoviak)</h6>
                <span> 내셔널 트레일 프로그램 매니저, 미국 산림청 </span>
              </td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>대한민국 산림청</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>토론 및 질의</td>
              <td class="note">(20분)</td>
            </tr>
            <tr>
              <td class="time">12:00 - 13:30</td>
              <td>점심식사</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4" class="time">13:30 - 14:50</td>
              <td>성공적인 트레일 운영 관리를 위한 국제 협력</td>
            </tr>
            <tr>
              <td>(연사1)미정</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>(연사2)미정</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>토론 및 질의</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td rowspan="5" class="time">15:00 - 16:20</td>
              <td>사회적 약자를 위한 트레일 프로그램</td>
            </tr>
            <tr>
              <td>
                <h6>에녹 글리든 (Enock Glidden)</h6>
                <span>
                  야외활동 접근성 전문가 (Outdoor Accessibility Specialist)
                </span>
              </td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>(연사1)미정</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>(연사2)미정</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>토론 및 질의</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td rowspan="4" class="time">16:30 - 17:50</td>
              <td>
                생물다양성 보존과 기후 위기 대응을 고려한 트레일 운영 관리
              </td>
            </tr>
            <tr>
              <td>(연사1)미정</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td>
                <h6>강수돌 박사</h6>
                <span
                  >명예 교수, 고려대학교 글로벌비즈니스대학 융합경영학부</span
                >
              </td>
              <td class="note">(30분)</td>
            </tr>

            <tr>
              <td>토론 및 질의</td>
              <td class="note">(30분)</td>
            </tr>
            <tr>
              <td class="time">18:00 - 20:00</td>
              <td>환영 만찬회</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-12 lg:mt-48">
      <header-section class="border-b-0">컨퍼런스 주제</header-section>
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
      title: "지속 가능한 트레일 운영을 위한 민관협력 정책",
      paragraph:
        "정부, 비영리 단체, 기업 간 협력은 지속 가능한 트레일 운영의 핵심 기반이 됩니다. 이번 주제에서는 공동의 목표, 투명한 의사소통, 상호 책임 및 참여적 접근을 바탕으로 한 성공적인 파트너십 모델을 소개하고, 모범 사례를 공유하며, 협력적 트레일 관리의 어려움을 극복하기 위한 전략을 논의할 것입니다. 참석자들은 이상적인 파트너십 역학과 협력 로드맵을 통해 지속 가능한 트레일 운영을 위한 지속적인 파트너십 구축에 대한 통찰을 얻을 수 있을 것입니다."
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "성공적인 트레일 운영 관리를 위한 국제 협력",
      paragraph:
        "아시아 트레일즈 네트워크를 비롯한 전 세계 트레일 단체들은 환경 보전, 트레일 연구 및 지식 자원 공유, 그리고 공동 마케팅을 위한 긴밀한 협력을 이어왔습니다. 이번 주제에서는 이러한 협력 노력이 어떻게 트레일 운영의 효율성과 지속가능성을 높일 수 있는지 살펴볼 것입니다. 통찰력 있는 토론과 사례 연구를 통해, 우리는 국경을 넘나드는 협력의 효과와 더불어 전 세계 트레일 네트워크의 미래를 형성하기 위한 협력의 잠재력을 극대화하는 전략을 모색할 것입니다."
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "사회적 약자를 위한 트레일 프로그램",
      paragraph:
        "트레일 관리 및 활용에 있어 사회적 약자와 소수자들의 접근성과 형평성은 중요하게 다루어져야 합니다. 우리는 물리적, 경제적, 문화적 요인으로 인해 소외되는 취약계층이 트레일 이용과 관련 프로그램 참여에 어려움을 겪고 있음에 주목할 것입니다. 이번 주제에서는 이러한 소외계층을 포용하기 위한 과제와 요구사항을 심도 있게 논의할 것입니다. 사려깊은 시설 관리와 다층적인 프로그램 개발은 모든 이용자의 다양한 니즈를 충족시킬 수 있는 포용적이고 접근성 높은 트레일을 만들어낼 것이며, 이는 야외 활동에 대한 사회적 형평성과 지역사회 참여를 증진할 수 있을 것입니다."
    }
  },
  {
    src: "dummy.png",
    description: {
      title: "생물다양성 보존과 기후 위기 대응을 고려한 트레일 운영 관리",
      paragraph:
        "트레일 운영 관리는 우리의 아름다운 자연환경에 이로운 방향으로 실천되어야 합니다. 전 세계적으로 트레일 생태계에 심각한 영향을 미치고 있는 생물다양성 감소와 기후 위기에 대하여 효과적이고 실용적인 대응 전략과 협력적 접근이 절실히 필요한 상황입니다. 이번 주제에서는 이러한 환경 문제에 대한 깊이 있는 토론과 실질적인 해결책을 모색할 것입니다. 이를 통해 트레일 관리자와 이해관계자들은 지속 가능한 자연환경을 위한 트레일 운영 관리 방안을 탐색할 수 있을 것입니다."
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
        @apply border-y border-grayscale-800 p-4 text-lg lg:text-2xl;
        h6 {
          @apply font-bold;
        }
        &.time {
          @apply text-2xl lg:text-3xl font-bold text-center align-middle border-r border-grayscale-800;
        }
        &.note {
          @apply text-center border-l;
        }
      }
    }
  }
}
</style>
