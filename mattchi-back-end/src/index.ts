import express, { Application } from "express";
import { Server } from "http";
import router from "./controller/router";

const app: Application = express();
const PORT = 3000;

let server: Server;

//受信したJSONリクエストを解析し、解析されたデータをreq.bodyに置く
app.use(express.json());

//フォームからのデータを受けとるため
app.use(express.urlencoded({ extended: true }));

//ルーター設定
app.use(router);

try {
  server = app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
