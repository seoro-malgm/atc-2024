import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getRouterParams, getQuery } from "h3";

// firestore
import { setDoc, doc } from "firebase/firestore";
import errorHandler from "@/server/lib/errorHandler";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const body = await readBody(evt);
  const { id } = await getQuery(evt);
  const { col: collectionName } = getRouterParams(evt);
  try {
    // console.log("collectionName, id :", collectionName, id);
    const ref = doc(db, collectionName, id);
    await setDoc(ref, body);
    return true;
  } catch (error) {
    throw createError(errorHandler(error, "auth", "수정 에러가 발생했습니다."));
  }
});
