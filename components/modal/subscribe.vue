<template>
  <UModal
    v-model="modalShow"
    class="modal"
    :ui="{
      width: 'w-full sm:max-w-[50rem]'
    }"
  >
    <form>
      <header class="modal-header">
        <h6>{{ $t("main_pop-up__title") }}</h6>

        <button @click.prevent="modalShow = false">
          <UIcon name="bxs:x-square" class="text-2xl lg:text-4xl" />
        </button>
      </header>
      <section class="modal-body">
        <form-input-text
          :form="subscriber"
          id="subscriber-name"
          bind="name"
          type="text"
          required="required"
          :title="$t('main_pop-up_name_subtitle')"
          :placeholder="$t('main_pop-up_name_desc')"
          class="mt-4"
          @input="$event => (subscriber.name = $event)"
          :required:="true"
          :validate="validator('name', subscriber.name)"
        />

        <form-input-text
          :form="subscriber"
          id="subscriber-email"
          bind="email"
          type="email"
          required="required"
          :title="$t('main_pop-up_mail_subtitle')"
          :placeholder="$t('main_pop-up_mail_desc')"
          @input="$event => (subscriber.email = $event)"
          :required:="true"
          class="mt-4"
          :validate="validator('email', subscriber.email)"
        />

        <form-input-select-menu
          class="my-4"
          :form="form"
          :title="$t('main_pop-up_lang_subtitle')"
          value-attribute="label"
          :options="locales"
          :placeholder="$t('main_pop-up_lang_desc')"
          @input="$event => (subscriber.lang = $event)"
        />

        <div class="input-phone">
          <form-input-select-menu
            class="input-phone-lang"
            :form="form"
            :title="$t('main_pop-up_phone_lang_desc')"
            value-attribute="value"
            :options="countryCodes"
            :placeholder="$t('main_pop-up_phone_lang_subtitle')"
            @input="$event => (subscriber.phone_lang = $event)"
          />
          <form-input-text
            :form="subscriber"
            id="subscriber-phone"
            bind="phone"
            type="text"
            required="required"
            :title="$t('main_pop-up_phone_number_subtitle')"
            :placeholder="$t('main_pop-up_phone_number_desc')"
            class="input-phone-number"
            @input="$event => (subscriber.phone_number = $event)"
            :required:="true"
            :validate="validator('phone', subscriber.phone_number)"
          />
        </div>

        <form-input-check
          :form="subscriber"
          bind="$send_agreed"
          required="required"
          :title="$t('main_pop-up_agree_subtitle')"
          class="mt-4"
          @input="$event => (subscriber.send_agreed = $event)"
        >
          <span>
            <nuxt-link
              :href="`/${lang}/terms`"
              class="underline text-hawkes-blue-800"
            >
              {{ $t("main_pop-up_privacy_desc") }}
            </nuxt-link>
          </span>
        </form-input-check>
        <form-input-check
          :form="subscriber"
          bind="$ad_agreed"
          required="required"
          class="mt-4"
          @input="$event => (subscriber.ad_agreed = $event)"
        >
          <span>
            <nuxt-link
              :href="`/${lang}/terms`"
              class="underline text-hawkes-blue-800"
            >
              {{ $t("main_pop-up_ad_desc") }}
            </nuxt-link>
          </span>
        </form-input-check>
      </section>
      <footer class="modal-footer">
        <button @click.prevent="submit" :disabled="!formValidate">
          {{ $t("main_pop-up_subs_subtitle") }}
        </button>
      </footer>
    </form>
  </UModal>
</template>

<script setup>
import validator from "@/composables/validator";
import countryCodes from "@/data/countryCodes";

const props = defineProps({
  shown: {
    type: Boolean,
    default: null
  },
  lang: {
    type: String,
    default: "ko"
  }
});
const emit = defineEmits();

const modalShow = ref(false);
watch(
  () => props.shown,
  (n, o) => {
    modalShow.value = n;
  }
);
watch(
  () => modalShow.value,
  (n, o) => {
    emit("toggle", n);
  }
);

const locales = ref([
  {
    label: "한국어",
    value: "한국어"
  },
  {
    label: "English",
    value: "영어"
  },
  {
    label: "中文",
    value: "중국어"
  },
  {
    label: "日本語",
    value: "일본어"
  }
]);

/**
 * @param eventOccurredBy : 구독방법 관리자 수동: "MANUAL" / 구독자가 직접: "SUBSCRIBER"
 * @param confirmEmailYN : 구독확인 메일 발송여부.
 *                         "Y" : 구독자에게 구독 확인 이메일을 발송하고, 구독자가 이 메일을 통해 구독 확인을 해야 구독자로 추가됩니다. 이 때 한 번에 추가하는 구독자가 10명을 초과하면 추가되지 않습니다.
 *                         "N" : 구독 확인 과정없이 바로 구독자로 추가됩니다. (기본값)
 *                         주소록 웹훅으로 "구독" 이벤트 알림을 받기로 한 경우, "confirmEmailYN"이 "Y"라면, 구독 확인까지 완료됐을 때 이벤트 알림을 받을 수 있습니다.
 * @param groupIds : 그룹에 할당된 고유의 아이디입니다. 해당 그룹에 구독자를 할당합니다.(기본값: 할당안함)
 * @param subscribers : [{email:string, name:string, $ad_agreed:"Y"/"N", tag1, tag2, tag3}]: 구독자 정보를 담고 있습니다. Key-Value 배열 형식으로 구성됩니다. [주소록] > [사용자 정의 필드]에 정의된 내용을 참조합니다.
 */
const form = ref({
  eventOccurredBy: "SUBSCRIBER",
  confirmEmailYN: "N",
  groupIds: ["330508"],
  subscribers: []
});

const subscriber = ref({
  email: null,
  name: null,
  send_agreed: false,
  lang: null,
  ad_agreed: false,
  phone_lang: null,
  phone_number: null
});

const formValidate = computed(() => {
  const obj = {
    email: validator("email", subscriber.value.email).value,
    name: validator("name", subscriber.value.name).value,
    send_agreed: subscriber.value?.send_agreed
  };
  return Object.values(obj).every(val => val === true);
});

const toast = useToast();
const submit = async e => {
  const { email, name, ad_agreed, lang, phone_lang, phone_number } =
    subscriber.value; // 구독자 정보 불러오기
  // 연락처 생성
  const phone = `+${phone_lang}${
    // 국가번호와 합침
    String(phone_number).startsWith("0")
      ? String(phone_number).slice(1)
      : phone_number //  0으로 시작할 경우 맨 앞의 0 제거
  }`;

  // 최종 body 생성
  const body = {
    ...form.value,
    subscribers: [
      {
        email,
        name,
        phone,
        lang,
        $ad_agreed: ad_agreed ? "Y" : "N",
        tag1: lang,
        tag2: phone_lang,
        tag3: phone
      }
    ]
  };
  try {
    const data = await $fetch("/api/stibee/lists/subscribers", {
      method: "POST",
      body
    });
    if (data) {
      modalShow.value = false;
      toast.add({
        id: `subscriber-added-${new Date().getTime()}`,
        title: "정상적으로 구독이 완료됐습니다.",
        color: "green",
        icon: "memory:checkbox-marked"
      });
    }
  } catch (error) {
    modalShow.value = false;
    toast.add({
      id: `subscriber-add-fail-${new Date().getTime()}`,
      title: "구독에 실패했습니다.",
      color: "red",
      icon: "bxs:x-square"
    });
  }
};
</script>

<style lang="postcss" scoped>
.modal {
  .modal-header {
    @apply p-6 relative border-b border-grayscale-800;
    h6 {
      @apply text-center text-lg lg:text-2xl font-bold;
    }
    button {
      @apply absolute top-4 right-4 text-2xl text-grayscale-400 hover:text-classic-rose-700 transition-all-default;
    }
  }
  .modal-body {
    @apply px-4 py-6;
    .input-phone {
      @apply grid grid-cols-12 gap-4 mt-4;
      .input-phone-lang,
      .input-phone-number {
        /* @apply ; */
      }
      .input-phone-lang {
        @apply col-span-12 lg:col-span-3 mb-0;
      }
      .input-phone-number {
        @apply col-span-12 lg:col-span-9;
      }
    }
  }
  .modal-footer {
    @apply text-center border-t border-grayscale-800;
    button {
      @apply block text-center py-4 px-2 w-full font-bold bg-green-200 hover:bg-green-400 transition-all-default opacity-100;
      &:disabled {
        @apply bg-grayscale-400 opacity-50;
      }
    }
  }
}
</style>
