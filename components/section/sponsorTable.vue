<template>
  <div id="sponsor-benefit-table">
    <div class="content">
      <header class="benefit-header">
        <header-section> 스폰서 혜택 </header-section>
        <!-- <p class="description">
          사단법인 숲길의 ‘2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스
          조직위원회’는 더욱 아름답고 풍성한 행사를 만들기 위한 다양한 형태의
          협업과 후원을 환영합니다. 파트너 후원은 사단법인 숲길이 지리산 환경을
          보호하고 다양한 사회공헌 프로그램들을 풍성하게 운영할 수 있도록
          도와줍니다. 환경보호와 사회공헌활동을 중요한 미션으로 여기는 소중한
          파트너들의 후원, 지원 및 협업으로 숲길의 이러한 노력이 꽃을 피울 수
          있었습니다. 숲길은 아름다운 지리산의 자연을 다음 세대에게 그대로
          물려주기 위하여 여러 단체, 기업, 공공기관 및 이해관계자들과 긴밀히
          협업해왔습니다. 우리는 이러한 파트너들의 소중한 지원에 깊은 감사를
          표합니다.
        </p> -->
      </header>
      <section class="benefit-content">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>천왕봉</th>
                <th>반달곰</th>
                <th>수달</th>
                <th>구상나무</th>
                <th>하늘다람쥐</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>후원금</td>
                <td>50,000,000원</td>
                <td>25,000,000원</td>
                <td>10,000,000원</td>
                <td>5,000,000원</td>
                <td>1,000,000원</td>
              </tr>
              <tr>
                <td>컨퍼런스 스피치 세션 발표</td>
                <td>20분</td>
                <td>10분</td>
                <td>5분</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>컨퍼런스 세션 중간 기업 광고 영상 송출</td>
                <td>총 60초</td>
                <td>총 40초</td>
                <td>총 20초</td>
                <td>총 10초</td>
                <td>-</td>
              </tr>
              <tr>
                <td>컨퍼런스 책자 내 기업 광고 (국/영문)</td>
                <td>2 페이지</td>
                <td>1 페이지</td>
                <td>1 페이지</td>
                <td>1/2 페이지</td>
                <td>1/4 페이지</td>
              </tr>
              <tr>
                <td>걷기축제 시작점 / 종점 부스</td>
                <td>5칸</td>
                <td>4칸</td>
                <td>3칸</td>
                <td>2칸</td>
                <td>1칸</td>
              </tr>
              <tr>
                <td>걷기축제 공식 홍보 영상 내 제품 노출</td>
                <td>10초</td>
                <td>7-8초</td>
                <td>5초</td>
                <td>3초</td>
                <td>-</td>
              </tr>
              <tr>
                <td>걷기축제 프로그램 가이드 내 기업 광고 (국/영문)</td>
                <td>2 페이지</td>
                <td>1 페이지</td>
                <td>1 페이지</td>
                <td>1/2 페이지</td>
                <td>1/4 페이지</td>
              </tr>
              <tr>
                <td>기업 제품 증정품 지급(굿즈 패키지)</td>
                <td>가능</td>
                <td>가능</td>
                <td>가능</td>
                <td>가능</td>
                <td>가능</td>
              </tr>
              <tr>
                <td>기업 로고 노출 위치</td>
                <td>참여자 등번호/현수막,스탠딩배너/포스터/웹사이트</td>
                <td>현수막/스탠딩배너,포스터/웹사이트</td>
                <td>현수막/스탠딩배너,포스터/웹사이트</td>
                <td>스탠딩배너,포스터/웹사이트</td>
                <td>웹사이트</td>
              </tr>
              <tr>
                <td>사전 마케팅 캠페인 공동 제작</td>
                <td>가능</td>
                <td>가능</td>
                <td>가능</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>지리산둘레길 공식 안내 책자 내 기업 광고</td>
                <td>1 페이지</td>
                <td>1 페이지</td>
                <td>1/2 페이지</td>
                <td>1/4 페이지</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  지리산둘레길 환경 프로그램 공동 제작 & 공동마케팅 (2024년 중)
                </td>
                <td>가능</td>
                <td>가능</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
</script>

<style lang="postcss" scoped>
#sponsor-benefit-table {
  @apply mb-20;
  .benefit-content {
    @apply container mx-auto py-24;
  }
}
</style>
