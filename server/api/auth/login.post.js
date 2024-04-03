import { setupFirebase } from "@/server/lib/firebase";
import { readBody } from "h3";
import { signInWithEmailAndPassword } from "firebase/auth";
import errorHandler from "@/server/lib/errorHandler";

// 로그인
export default defineEventHandler(async evt => {
  const { auth } = setupFirebase();
  const { email, pwd } = await readBody(evt);
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, pwd);
    if (user) {
      return {
        uid: user.uid,
        accessToken: user.accessToken
      }; // 성공 시 사용자 토큰 반환
    }
  } catch (error) {
    throw createError(
      errorHandler(error, "auth", "로그인중에 에러가 발생했습니다.")
    );
  }
});
