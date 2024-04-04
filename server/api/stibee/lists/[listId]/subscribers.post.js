import { readBody, getRouterParams } from "h3";

// 스티비에 구독자를 추가합니다.
// https://api.stibee.com/docs/
export default defineEventHandler(async evt => {
  const config = useRuntimeConfig();
  const { stibeeApiKey: AccessToken } = config;
  const { listId } = await getRouterParams(evt);
  const body = await readBody(evt);
  try {
    // const data = await addDoc(collection(db, "contact"), body);
    // if (docRef) {
    //   return docRef;
    // }
  } catch (error) {
    // throw error;
  }
});
