<template>
  <UModal v-model="modalShow" class="modal">
    <form>
      <header class="modal-header">
        <h6>소식 구독하기</h6>

        <button @click.prevent="modalShow = false">
          <UIcon name="bxs:x-square" />
        </button>
      </header>
      <section class="modal-body">
        <!-- todo: validation -->
        <form-input-text
          :form="subscriber"
          id="subscriber-email"
          bind="email"
          type="email"
          required="required"
          title="이메일"
          placeholder="구독자님의 이메일을 입력해주세요"
          @input="$event => (subscriber.email = $event)"
          :required:="true"
          :validate="validator('email', subscriber.email)"
        />
        <form-input-text
          :form="subscriber"
          id="subscriber-name"
          bind="name"
          type="text"
          required="required"
          title="이름"
          placeholder="구독받으실 구독자님의 이름을 입력해주세요."
          class="mt-4"
          @input="$event => (subscriber.name = $event)"
          :required:="true"
          :validate="validator('name', subscriber.name)"
        />
        <form-input-select-menu
          class="my-4"
          :form="form"
          title="언어 선택"
          value-attribute="label"
          :options="locales"
          placeholder="구독으로 받을 메일의 언어를 선택해주세요."
          @input="$event => (subscriber.lang = $event)"
        />

        <form-input-check
          :form="subscriber"
          bind="$send_agreed"
          required="required"
          title="수신동의 여부"
          class="mt-4"
          @input="$event => (subscriber.send_agreed = $event)"
        >
          <span>
            (필수)
            <nuxt-link
              href="/terms#privacy"
              target="_blank"
              class="underline text-hawkes-blue-800"
            >
              개인정보 수집 및 이용
            </nuxt-link>
            에 동의합니다.
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
            (선택)
            <nuxt-link
              href="/terms#ad_agree"
              target="_blank"
              class="underline text-hawkes-blue-800"
            >
              광고성 정보 수신
            </nuxt-link>
            에 동의합니다.
          </span>
        </form-input-check>
      </section>
      <footer class="modal-footer">
        <button @click.prevent="submit" :disabled="!formValidate">
          구독하기
        </button>
      </footer>
    </form>
  </UModal>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import validator from "@/composables/validator";

const props = defineProps({
  shown: {
    type: Boolean,
    default: null
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
  ad_agreed: false
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
  const body = {
    ...form.value,
    subscribers: [
      {
        ...subscriber.value,
        $ad_agreed: subscriber.value.ad_agreed ? "Y" : "N",
        subscribed_date: new Date()
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
        color: "spring-green",
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
  }
  .modal-footer {
    @apply text-center border-t border-grayscale-800;
    button {
      @apply block text-center py-4 px-2 w-full font-bold bg-spring-green-200 hover:bg-spring-green-400 transition-all-default opacity-100;
      &:disabled {
        @apply bg-grayscale-400 opacity-50;
      }
    }
  }
}
</style>
