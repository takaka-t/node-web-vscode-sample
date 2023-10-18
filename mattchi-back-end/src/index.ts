import express, { Application } from "express";
import { Server } from "http";
import router from "./controller/router";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";

const app: Application = express();

let server: Server;

//環境変数読み込み
dotenv.config({ path: "src/config/.env" });

//受信したJSONリクエストを解析し、解析されたデータをreq.bodyに置く
app.use(express.json());

//フォームからのデータを受けとるため
app.use(express.urlencoded({ extended: true }));

//helmet(レスポンスヘッダ)設定
app.use(
  helmet({
    //CSP(XSS攻撃の軽減やデータインジェクション攻撃の軽減をするために追加できるセキュリティレイヤ)設定
    //ヘッダの値には、各リソース（JavaScript、CSS、画像など）を、どこから（自分のドメイン、特定の外部ドメイン、JSならscriptタグなど）
    // 読み込むことを許可するのかが記述されている
    //TODO:基本のデフォルト設定でヘッダーは保護されそうだが、CSPとかオリジン関係は設定する必要あるかも(フロントとの兼ね合いから)
    //selfは、同一オリジンを許可
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "base-uri": ["'self'"],
        "block-all-mixed-content": [],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src": ["'self'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": [],
        "connect-src": ["'self'"],
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

//ルーター設定
app.use(router);

try {
  server = app.listen(process.env.PORT, () => {
    console.log(`dev server running at: http://localhost:${process.env.PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
