import { setupFirebase } from "@/server/lib/firebase";
import { signOut } from "firebase/auth";
import errorHandler from "@/server/lib/errorHandler";

// 로그아웃
export default defineEventHandler(async evt => {
  const { auth } = setupFirebase();
  signOut(auth)
    .then(() => {
      // 로그아웃 성공
      return true;
    })
    .catch(error => {
      throw createError(
        errorHandler(error, "auth", "로그아웃중에 에러가 발생했습니다.")
      );
    });
});
