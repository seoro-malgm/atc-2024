import { setupFirebase } from "@/server/lib/firebase";
import { readBody } from "h3";

// firestore
import { addDoc, collection } from "firebase/firestore";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const form = await readBody(evt);
  const body = {
    from: form.email,
    to: "contact@atcjirisan.com",
    replyTo: form.email,
    message: {
      subject: `[${form.company}]에서 스폰서 미팅을 요청했습니다.`,
      html: `<ul><li>소속: ${form.company}</li><li>담당자명: ${form.manager}</li><li>담당자 연락처: ${form.phone}</li><li>담당자 이메일: ${form.email}</li><li>원하는 혜택: ${form.selectedBenefits}</li><li>원하는 미팅 날짜: ${form.meetingDate}</li><li>원하는 미팅 시간: ${form.meetingTime}</li></ul> <hr style='margin 16px auto'> <span style='color:#888'>이 메일은 ATC 웹사이트 스폰서 페이지에서 직접 연락온 미팅 예약을 알림용 메일입니다. 직접 온 메일이 아닙니다.</span> `
    }
  };
  try {
    const docRef = await addDoc(collection(db, "mail"), body);
    if (docRef) {
      return docRef;
    }
  } catch (error) {
    throw error;
  }
});
