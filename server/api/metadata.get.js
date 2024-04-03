import { setupFirebase } from "@/server/lib/firebase";
import { readBody, getQuery, getRouterParams } from "h3";

// firestore
import {
  // getFirestore,
  // doc,
  // addDoc,
  // getDoc,
  // setDoc,
  getDocs,
  // deleteDoc,
  collection,
  query,
  orderBy,
  // updateDoc,
  // increment,
  limit,
  where
  // getCountFromServer,
  // startAt
  // startAfter
} from "firebase/firestore";

/**
 * 메타데이터 불러오기
 */
export default defineEventHandler(async evt => {
  const response = new Promise(async (resolve, reject) => {
    const { db } = setupFirebase();
    // 최종 스냅샷
    const snapshot = await getDocs(query(collection(db, "metadata")));
    if (snapshot?.docs?.length) {
      const obj = {};
      for (let index = 0; index < snapshot.docs.length; index++) {
        const doc = snapshot.docs[index];
        obj[doc.id] = {
          ...doc.data()
        };
      }
      // console.log("obj :", obj);
      return resolve(obj);
    }
  });
  return response;
});
