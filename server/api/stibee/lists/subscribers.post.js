import { readBody, getRouterParams } from "h3";

// 스티비에 구독자를 추가합니다.
// https://api.stibee.com/docs/
export default defineEventHandler(async evt => {
  let baseURL = "https://api.stibee.com/v1";
  const config = useRuntimeConfig();
  const { stibee_apiKey: AccessToken, stibee_listId: lisdId } = config;
  const body = await readBody(evt);

  try {
    const data = await $fetch(`${baseURL}/lists/${lisdId}/subscribers`, {
      method: "POST",
      headers: {
        AccessToken: `${AccessToken}`
      },
      body: body
    });
    if (data?.Ok) {
      return data;
    }
  } catch (data) {
    throw data.Error;
  }
});
