import { setupFirebase } from "@/server/lib/firebase";
import { getQuery, readMultipartFormData } from "h3";
import errorHandler from "@/server/lib/errorHandler";

// firebase storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// 콜렉션에 문서 추가
export default defineEventHandler(async evt => {
  const { storage } = setupFirebase();
  const { path, fileName, type } = await getQuery(evt);
  const formData = await readMultipartFormData(evt);
  const file = formData.find(f => f.name === "file").data;

  try {
    const storageRef = ref(storage, `/${path}/${fileName}`);
    return uploadBytes(storageRef, file, {
      contentType: type
    }).then(snapshot => {
      return getDownloadURL(snapshot.ref).then(url => {
        return { name: fileName, url };
      });
    });
  } catch (error) {
    throw createError(errorHandler(error, "storage", "에러가 발생했습니다."));
  }
});
