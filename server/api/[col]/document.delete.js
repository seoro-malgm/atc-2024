import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getRouterParams, getQuery } from "h3";

// firestore
import { getDoc, doc, deleteDoc } from "firebase/firestore";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { db } = setupFirebase();
  const { col: collectionName } = getRouterParams(evt);
  const { id } = getQuery(evt);
  if (!collectionName || !id) throw reject(new Error("잘못된 호출입니다."));
  await deleteDoc(doc(db, collectionName, id));
  return true;
});
