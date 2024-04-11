import { ref, computed } from "vue";

export default function valivedator(p, t) {
  const pattern = {
    // 이름, 중국어, 일본어, 한국어, 영어 포함
    name: /^[a-zA-Z가-힣\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\u30A0-\u30FF][a-zA-Z가-힣\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\u30A0-\u30FF\s]*$/,
    password: /^[a-zA-Z!@#$%&_]+$/,
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };

  const validate = computed(() => pattern[p].test(t) && t !== "" && t !== null);

  return validate;
}
