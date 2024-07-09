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

      <div class="container mx-auto">
        <!-- <h1>ATC를 후원하세요!</h1> -->
        <ul>
          <li class="my-40">
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
                <nuxt-img
                  src="dummy.png"
                  alt=""
                  class="w-full"
                  provider="storageBucket"
                />
              </div>
            </div>
          </li>
          <li class="my-40">
            <div class="flex flex-col md:flex-row">
              <div class="p-4 w-full lg:w-6/12">
                <nuxt-img
                  src="dummy.png"
                  alt=""
                  class="w-full"
                  provider="storageBucket"
                />
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
          <li class="my-40">
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
                <nuxt-img
                  src="dummy.png"
                  alt=""
                  class="w-full"
                  provider="storageBucket"
                />
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
                  :required="true"
                  :validate="validator('name', form.company)"
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
                  :required="true"
                  :validate="validator('name', form.manager)"
                />
              </li>
              <li class="mb-10">
                <form-input-text
                  :form="form"
                  id="form-manager-phone"
                  bind="phone"
                  input-type="tel"
                  title="담당자 연락처"
                  desc="하이픈(-)도 함께 입력해주세요."
                  placeholder="담당자 연락처를 입력해주세요."
                  @input="$event => (form.phone = $event)"
                  :required="true"
                  :validate="validator('phone', form.phone)"
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
                  :required="true"
                  :validate="validator('email', form.email)"
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
                  v-model="form.meetingDate"
                  title="원하는 미팅 날짜"
                  :attributes="attributes"
                  :required="true"
                  desc="미팅이 가능하신 날짜를 선택해주세요."
                />
              </li>
              <li class="mb-10">
                <form-input-radio-btns
                  v-model="form.meetingTime"
                  title="원하는 미팅 시간"
                  :form="form"
                  @input="$event => (form.meetingTime = $event)"
                  :options="meetingTimeOptions"
                >
                </form-input-radio-btns>
              </li>
            </ul>
            <footer class="footer-form mt-8">
              <button type="submit" class="btn-submit">
                <!-- :disabled="!formValidate" -->
                작성 완료
              </button>
            </footer>
          </form>
        </section>
      </div>
    </section>
    <!-- <dev-only> form: {{ form }} </dev-only> -->
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
import validator from "@/composables/validator";

const items = computed(() => {
  return benefitList;
});

const form = ref({
  company: null,
  manager: null,
  phone: null,
  email: null,
  selectedBenefits: [],
  meetingDate: null,
  meetingTime: null
});

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
    ],
    masks: { modelValue: "YYY-MM-DD" }
  };
});

const meetingTimeOptions = ref([
  {
    label: "오전 10시",
    value: "10:00"
  },
  {
    label: "오전 11시",
    value: "11:00"
  },
  {
    label: "오후 1시",
    value: "13:00"
  },
  {
    label: "오후 2시",
    value: "14:00"
  },
  {
    label: "오후 3시",
    value: "15:00"
  },
  {
    label: "오후 4시",
    value: "16:00"
  },
  {
    label: "오후 5시",
    value: "17:00"
  }
]);

const formValidate = computed(() => {
  const obj = {
    company: !!form.value.company && form.value.company !== "",
    manager: !!form.value.manager && form.value.manager !== "",
    phone: validator("phone", form.value.phone).value,
    email: validator("email", form.value.email).value,
    meetingDate: !!form?.value?.meetingDate,
    meetingTime: !!form?.value?.meetingTime
  };
  // return obj;
  return Object.values(obj).every(val => val === true);
});

const toast = useToast();
const submit = async () => {
  const body = {
    ...form.value,
    meetingDate: new Date(form.value.meetingDate).toLocaleDateString()
  };
  try {
    const data = await $fetch("/api/together/create", {
      method: "POST",
      body
    });
    if (data) {
      toast.add({
        id: `contact-added-${new Date().getTime()}`,
        title: "정상적으로 미팅 신청이 완료됐습니다.",
        color: "green",
        icon: "memory:checkbox-marked"
      });
      const mailSend = await $fetch("/api/mail/send", {
        method: "POST",
        body
      });
      if (mailSend) {
        console.log("mailSend :", mailSend);
      }
      form.value = {
        company: null,
        manager: null,
        phone: null,
        email: null,
        selectedBenefits: [],
        meetingDate: null,
        meetingTime: null
      };
    }
  } catch (error) {
    toast.add({
      id: `contact-add-fail-${new Date().getTime()}`,
      title: "신청에 실패했습니다. 다시 시도해주세요.",
      color: "red",
      icon: "bxs:x-square"
    });
  }
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

.btn-submit {
  @apply block py-3 border-t border-grayscale-800 w-full bg-green-200 hover:bg-green-400  transition-all-default text-xl font-semibold;
  &:disabled {
    @apply bg-gray-400 opacity-50;
  }
}
</style>
