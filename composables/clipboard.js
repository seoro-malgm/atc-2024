/**
 * 클립보드에 텍스트를 복사하는 함수
 * @param {string} text 복사할 텍스트
 */

export default async function clipboard(text) {
  const nuxtApp = useNuxtApp();
  const { t } = nuxtApp?.$i18n;
  if (!navigator.clipboard) {
    toast.add({
      title: `ERROR`,
      description: t("toast_message_clipboard_disabled"),
      icon: "memory:alert-octagon",
      color: "red"
    });
    return;
  }
  const toast = useToast();
  try {
    await navigator.clipboard.writeText(text);
    toast.add({
      title: t("toast_message_clipboard_success"),
      color: "green",
      icon: "memory:checkbox-marked"
    });
  } catch (err) {
    toast.add({
      title: `ERROR`,
      description: t("toast_message_clipboard_fail"),
      icon: "memory:alert-octagon",
      color: "red"
    });
  }
}
