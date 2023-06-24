import express, { Application } from "express";
import { Server } from "http";
import router from "./controller/router";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();
const PORT = 3000;

let server: Server;

//受信したJSONリクエストを解析し、解析されたデータをreq.bodyに置く
app.use(express.json());

//フォームからのデータを受けとるため
app.use(express.urlencoded({ extended: true }));

//ルーター設定
app.use(router);

//helmet(レスポンスヘッダ)設定
app.use(
  helmet({
    //CSP(XSS攻撃の軽減やデータインジェクション攻撃の軽減をするために追加できるセキュリティレイヤ)設定
    //ヘッダの値には、各リソース（JavaScript、CSS、画像など）を、どこから（自分のドメイン、特定の外部ドメイン、JSならscriptタグなど）
    // 読み込むことを許可するのかが記述されている
    contentSecurityPolicy: {
      directives: {
        //任意のドメインからの許可
        // 「self」は同一オリジンかどうか
        defaultSrc: ["'self'"],
        //任意のドメインからのスクリプトの実行を許可
        scriptSrc: ["'self'"],
        //任意のドメインからの画像の読み込みを許可
        imgSrc: ["'self'"],
      },
    },
  })
);

//CORS設定
app.use(
  cors({
    origin: ["http://example.com"], //許可するオリジン
  })
);

try {
  server = app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
