import { setupFirebase } from "@/server/lib/firebase";
import { getQuery, readMultipartFormData } from "h3";
import errorHandler from "@/server/lib/errorHandler";

// firebase storage
import { ref, deleteObject } from "firebase/storage";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { storage } = setupFirebase();
  const { path, fileName } = await getQuery(evt);

  try {
    const storageRef = ref(storage, `/${path}/${fileName}`);
    if (!storageRef) return;
    deleteObject(storageRef, `/${path}/${fileName}`);
  } catch (error) {
    throw createError(errorHandler(error, "storage", "에러가 발생했습니다."));
  }
});
