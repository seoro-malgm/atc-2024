import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getRouterParams } from "h3";

// firestore
import { addDoc, collection } from "firebase/firestore";
import errorHandler from "@/server/lib/errorHandler";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const body = await readBody(evt);
  const { col: collectionName } = getRouterParams(evt);
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...body,
      no: Number(body.no)
    });
    if (docRef) {
      return docRef;
    }
  } catch (error) {
    throw createError(
      errorHandler(error, "auth", "업로드중에 에러가 발생했습니다.")
    );
  }
});
