import { defineEventHandler } from "h3";
import { setupFirebase } from "@/server/lib/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

export default defineEventHandler(async event => {
  // 요청된 URL 확인
  if (event.node.req.url !== "/rss") return; // 요청 위치가 /rss인 경우에만 사용
  const config = useRuntimeConfig();
  const { db } = setupFirebase();
  const snapshot = await getDocs(
    query(collection(db, "works"), orderBy("no", "desc"))
  );

  if (snapshot.empty) {
    event.res.statusCode = 204; // No Content
    return "";
  }

  const feedItems = snapshot.docs
    .map(doc => {
      const item = doc.data();
      return `
        <item>
          <title>${item.title}</title>
          <link>https://seoro-malgm.studio/${doc.id}</link>
          <description>${item.text}</description>
          <pubDate>${new Date(item.workDate).toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
      <channel>
        <title>Seoro-malgm Studio</title>
        <link>https://seoro-malgm.studio</link>
        <description>Updates from Seoro-malgm Studio including works, blog posts, and contact information.</description>
        ${feedItems}
      </channel>
</rss>
  `;

  // // XML 데이터를 반환하면서 Content-Type을 설정합니다.
  // event.node.res.writeHead(200, {
  //   "Content-Type": "application/rss+xml; charset=utf-8"
  // });
  // event.node.res.end(feed);
  event.node.res.setHeader(
    "Content-Type",
    "application/rss+xml; charset=utf-8"
  );
  event.node.res.end(feed);
});
