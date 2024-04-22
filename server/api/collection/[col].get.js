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
  const { db } = setupFirebase();
  const { col: collectionName } = getRouterParams(evt);
  const queryData = await getQuery(evt);
  // console.log("queryData :", queryData);
  // 쿼리데이터 색인
  const queryConstraints = [];
  if (queryData) {
    for (const [key, value] of Object.entries(queryData)) {
      if (!value) return;
      if (typeof value === "object") {
        // 정렬 조건 처리
        if (key === "orderBy") {
          queryConstraints.push(orderBy(...value));
        }
        // 필드 필터 처리
        if (Array.isArray(value)) {
          if (value.length === 3) {
            // 예: ["status", "==", "active"]
            queryConstraints.push(where(...value));
          }
        }
      } else if (typeof value === "string" || typeof value === "number") {
        // 갯수 제한 처리
        if (key === "limit") {
          queryConstraints.push(limit(Number(value)));
        }
        // 페이지네이션 처리
        if (key === "startAfter" && value) {
          const lastDocSnapshot = await getDoc(doc(db, collectionName, value));
          // console.log("startAfter :", value);
          if (lastDocSnapshot.exists()) {
            // console.log("lastDocSnapshot :", lastDocSnapshot.exists());
            queryConstraints.push(startAfter(lastDocSnapshot));
          }
        }
        // 카테고리
        if (key === "category" && value !== "") {
          queryConstraints.push(where(key, "array-contains-any", [value]));
        } else {
        }
      }
    }
  }
  // 최종 스냅샷

  try {
    const snapshot = await getDocs(
      query(collection(db, collectionName), ...queryConstraints)
    );
    if (snapshot) {
      let items = [];
      items = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
      return items;
    }
  } catch (error) {
    throw error;
  }
});
