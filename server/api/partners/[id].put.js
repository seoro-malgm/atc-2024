import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getRouterParams, getQuery } from "h3";

// firestore
import { setDoc, doc } from "firebase/firestore";
import errorHandler from "@/server/lib/errorHandler";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const body = await readBody(evt);
  const { id } = getRouterParams(evt);
  try {
    const ref = doc(db, "client", id);
    await setDoc(ref, body);
    return true;
  } catch (error) {
    throw createError(error);
  }
});
