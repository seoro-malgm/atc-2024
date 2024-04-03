import { setupFirebase } from "@/server/lib/firebase";
import { readBody } from "h3";

// firestore
import { addDoc, collection } from "firebase/firestore";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const response = new Promise(async (resolve, reject) => {
    const { db } = setupFirebase();
    const body = await readBody(evt);
    try {
      const docRef = await addDoc(collection(db, "contact"), body);
      if (docRef) {
        return resolve(docRef);
      }
    } catch (error) {
      throw reject(error);
    }
  });
  return response;
});
