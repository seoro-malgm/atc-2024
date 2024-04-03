import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getRouterParams, getQuery } from "h3";

// firestore
import { getDoc, doc, deleteDoc } from "firebase/firestore";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const { id } = getQuery(evt);
  await deleteDoc(doc(db, "contact", id));
  return true;
});
