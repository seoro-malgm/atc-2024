import { setupFirebase } from "@/server/lib/firebase";
import { getQuery } from "h3";
import { ref, getDownloadURL } from "firebase/storage";

export default defineEventHandler(async evt => {
  const { storage } = setupFirebase();
  const { path } = getQuery(evt);

  try {
    const snapshot = await getDownloadURL(ref(storage, path));
    if (snapshot) {
      return snapshot;
    }
  } catch (error) {
    // 에러 로깅, 실제 프로덕션 환경에서는 에러 로깅 시스템을 사용할 수 있음
    throw createError({
      statusCode: 404,
      statusMessage: "Document not found",
      data: { message: error.message }
    });
  }
});
