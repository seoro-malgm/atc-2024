<template>
  <div id="page-together">
    <header class="header-page">
      <div class="logo">
        <logo-symbol-large />
        <nuxt-img
          src="/lettertype-full-eng.svg"
          alt="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
          title="5th ASIA TRAILS CONFERENCE 2024 JIRISAN"
        />
      </div>

      <div class="">
        <!-- <h1>ATC를 후원하세요!</h1> -->
        <ul>
          <li>
            <div class="flex flex-col md:flex-row">
              <div class="p-4 w-full lg:w-4/12">
                <h6 class="max-lg:text-xl text-2xl font-bold mb-3">
                  ATC는 친환경적이고, 규모가 정말 큽니다
                </h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque sequi autem expedita tempora fugiat adipisci, assumenda
                  esse vitae aliquid, commodi, deleniti voluptates itaque.
                  Obcaecati consectetur ab quae porro necessitatibus ex.
                </p>
              </div>
              <div class="p-4 w-full lg:w-8/12">
                <nuxt-img src="/images/dummy.jpeg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col md:flex-row">
              <div class="p-4 w-full lg:w-6/12">
                <nuxt-img src="/images/dummy.jpeg" alt="" />
              </div>
              <div class="p-4 w-full lg:w-6/12">
                <h6 class="max-lg:text-xl text-2xl font-bold mb-3">
                  각종 기관들과 연대하고, 함께하고 있습니다
                </h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque sequi autem expedita tempora fugiat adipisci, assumenda
                  esse vitae aliquid, commodi, deleniti voluptates itaque.
                  Obcaecati consectetur ab quae porro necessitatibus ex.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col md:flex-row">
              <div class="p-4 w-full lg:w-7/12">
                <h6 class="max-lg:text-xl text-2xl font-bold mb-3">
                  꾸준한 지속가능성을 보여줄 것이고 이렇게 이어나갈 수 있습니다.
                </h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque sequi autem expedita tempora fugiat adipisci, assumenda
                  esse vitae aliquid, commodi, deleniti voluptates itaque.
                  Obcaecati consectetur ab quae porro necessitatibus ex.
                </p>
              </div>
              <div class="p-4 w-full lg:w-5/12">
                <nuxt-img src="/images/dummy.jpeg" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <section-marquee class="border-b border-grayscale-800" />
    <section-sponsor-benefits />

    <section id="section-meeing-form">
      <!-- marquee로 padding 역할 -->
      <section-marquee />
      <header-section> 스폰서 미팅 예약 </header-section>
      <div class="form-wrap relative flex max-md:flex-col items-start">
        <!-- 폼 헤더 -->
        <header
          class="w-full md:w-5/12 xl:w-6/12 xl:sticky xl:top-[82px] left-0 p-8 border-b border-grayscale-800"
        >
          <h4 class="text-2xl xl:text-3xl mb-3 skew-x-[-15deg] font-bold">
            미팅을 통해 ATC의 스폰서가 되어주세요
          </h4>
          <p class="text-sm">
            표를 잘 작성해주시면 저희가 연락을 할 것이고 그러면 미팅을 진행하여
            스폰서 계약을 진행합니다. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus exercitationem modi deleniti odit est
            quidem repellat eos maxime quas obcaecati reiciendis magnam facilis
            sapiente, a, dolorum nam velit iste eveniet consequatur. Doloribus
            rem alias corporis quibusdam maxime deserunt voluptatibus culpa
            mollitia nesciunt tempora quae ea aliquid recusandae eius dolores
            excepturi aperiam ducimus facere, libero quod, nemo iusto
            dignissimos dolor! Ducimus reprehenderit voluptatum odio eaque aut
            quaerat qui, deserunt soluta facere itaque eligendi illum quasi
            voluptas temporibus provident nostrum tenetur quis, sed numquam
            explicabo! Rerum aliquid quos expedita placeat saepe vitae illo.
            Rerum enim quod explicabo voluptatibus animi autem, totam delectus
            incidunt velit. Architecto praesentium cum harum? Cupiditate facilis
            sapiente nostrum tempora debitis illo fuga, dolorem doloremque
            molestias quaerat odit autem.
          </p>
        </header>
        <!-- 폼 -->
        <section
          class="w-full md:w-7/12 max-md:mt-8 max-md:border-t max-lg:border-grayscale-800 xl:w-6/12 md:border-s md:border-gray-800"
        >
          <form @submit.prevent="submit">
            <ul class="p-8">
              <li class="mb-10">
                <form-input-text
                  :form="form"
                  id="form-company"
                  bind="company"
                  title="소속"
                  placeholder="회사명을 입력해주세요."
                  @input="$event => (form.company = $event)"
                />
              </li>
              <li class="mb-10">
                <form-input-text
                  :form="form"
                  id="form-manager"
                  bind="manager"
                  title="담당자명"
                  placeholder="담당자 성함을 입력해주세요."
                  @input="$event => (form.manager = $event)"
                />
              </li>
              <li class="mb-10">
                <form-input-text
                  :form="form"
                  id="form-manager-phone"
                  bind="phone"
                  input-type="tel"
                  title="담당자 연락처"
                  placeholder="담당자 연락처를 입력해주세요."
                  @input="$event => (form.phone = $event)"
                />
              </li>
              <li class="mb-10">
                <form-input-text
                  :form="form"
                  id="form-manager-email"
                  bind="email"
                  input-type="email"
                  title="담당자 이메일"
                  placeholder="담당자 이메일을 입력해주세요"
                  @input="$event => (form.email = $event)"
                />
              </li>
              <li class="mb-10">
                <form-input-select-menu
                  :form="form"
                  :options="items"
                  id="form-company"
                  bind="selectedBenefits"
                  title="원하는 혜택"
                  placeholder="원하는 스폰서 혜택을 선택하세요"
                  :multiple="true"
                  @input="$event => (form.selectedBenefits = $event)"
                />
              </li>
              <li class="mb-10">
                <form-input-date-picker
                  v-model="form.dates"
                  title="원하는 미팅 날짜"
                  :attributes="attributes"
                  desc="미팅이 가능하신 날짜를 선택해주세요."
                />
              </li>
            </ul>
            <footer class="footer-form mt-8">
              <button
                type="submit"
                class="py-3 border-t border-grayscale-800 w-full bg-spring-green-200 hover:bg-spring-green-400 transition-all-default text-xl font-semibold"
              >
                작성 완료
              </button>
            </footer>
          </form>
        </section>
      </div>
    </section>

    <section-marquee />
    <!-- <section
      class="min-h-lvh flex items-center justify-center border-t border-grayscale-800"
    >
      함께하는 기관 목록
    </section> -->
    <!-- 스폰서 -->
    <section-sponsors />
    <!-- faq 먹럭 -->
    <section-faq />
    <section-marquee />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import benefitList from "@/data/benefitList";

const items = computed(() => {
  return benefitList;
});

const form = ref({});

const attributes = computed(() => {
  return {
    highlight: true,
    minDate: new Date(),
    dates: [],
    disabledDates: [
      {
        repeat: {
          weekdays: [1, 7]
        }
      }
    ]
  };
});

const submit = () => {
  console.log("form.value :", form.value);
};
</script>

<style lang="postcss" scoped>
#page-together {
  .header-page {
    .logo {
      @apply border-b border-grayscale-800;
    }
  }
}
#section-meeing-form {
  /* @apply pt-[68px] xl:pt-[81px]; */
}
</style>
