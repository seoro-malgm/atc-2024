// /server/api/collection/works.js
import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getQuery, getRouterParams } from "h3";

// firestore
import {
  // getFirestore,
  doc,
  // addDoc,
  getDoc,
  // setDoc,
  getDocs,
  // deleteDoc,
  collection,
  query,
  orderBy,
  // updateDoc,
  // increment,
  limit,
  where,
  // getCountFromServer,
  // startAt
  startAfter
} from "firebase/firestore";

/**
 * 불러오기
 */
export default defineEventHandler(async evt => {
  const response = new Promise(async (resolve, reject) => {
    const { db } = setupFirebase();
    const { col: collectionName, id: docId } = getRouterParams(evt);
    // const queryData = await getQuery(evt);

    // 최종 스냅샷
    const snapshot = await getDoc(doc(db, collectionName, docId));
    // console.log("snapshot :", snapshot);
    if (snapshot.exists()) {
      return resolve({
        id: snapshot.id,
        ...snapshot.data()
      });
    } else {
      return reject(false);
    }
  });
  return response;
});
