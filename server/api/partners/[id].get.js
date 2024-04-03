import { setupFirebase } from "@/server/lib/firebase";
import { getRouterParams } from "h3";
import { getDoc, doc } from "firebase/firestore";

export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const { id } = getRouterParams(evt);

  try {
    const docRef = doc(db, "partners", id);
    const snapshot = await getDoc(doc(db, "client", id));
    // console.log("snapshot.data() :", snapshot.exists());

    if (!snapshot.exists()) {
      // 문서가 존재하지 않을 때 404 에러를 전송
      throw new Error("Document not found");
    }

    // 문서 데이터 반환
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Document not found",
      data: { message: error.message }
    });
  }
});
