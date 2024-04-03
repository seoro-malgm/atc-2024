import { setupFirebase } from "@/server/lib/firebase";
import { getRouterParams, getQuery, readBody } from "h3";
import { getDoc, doc, updateDoc, increment } from "firebase/firestore";

export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const { fields } = await getRouterParams(evt);
  const { col: collectionName, id, update } = await readBody(evt);

  try {
    const docRef = await doc(db, collectionName, id);
    if (update[0] === "increment") {
      updateDoc(docRef, {
        [fields]: increment([update[1]])
      });
    }
  } catch (error) {
    // 에러 로깅, 실제 프로덕션 환경에서는 에러 로깅 시스템을 사용할 수 있음
    console.error(error);

    // 여기서는 h3의 sendError 함수를 사용하여 에러 응답 전송
    // 이 부분은 h3 라이브러리의 sendError 사용 방법에 따라 달라질 수 있음
    // 만약 sendError 함수가 없다면, 직접 에러 객체를 만들어 반환할 수 있습니다.
    // 예: return { error: true, message: error.message, statusCode: 500 };
    throw createError({
      statusCode: 404,
      statusMessage: "Document not found",
      data: { message: error.message }
    });
  }
});
