/**
 * 클립보드에 텍스트를 복사하는 함수
 * @param {string} text 복사할 텍스트
 */

export default async function clipboard(text) {
  if (!navigator.clipboard) {
    toast.add({
      id: "connot-fail",
      title: `ERROR`,
      description: "클립보드를 사용할 수 없는 브라우저입니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
    return;
  }
  const toast = useToast();
  try {
    await navigator.clipboard.writeText(text);
    toast.add({
      id: `clipboard-added-${new Date().getTime()}`,
      title: "클립보드에 저장되었습니다.",
      color: "spring-green",
      icon: "memory:checkbox-marked"
    });
  } catch (err) {
    toast.add({
      id: "clipboard-fail",
      title: `ERROR`,
      description: "에러가 발생하여 클립보드에 복사할 수 없습니다.",
      icon: "memory:alert-octagon",
      color: "red"
    });
  }
}
