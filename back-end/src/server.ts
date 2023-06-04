import express from "express";
import router from "./controllers/router";
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware ログ
const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("request", req);
  next();
};
app.use(logger);

// テスト
app.get("/test", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send(JSON.stringify({ AAA: "testGetAAA" }));
});

// route設定
app.use(router);

app.listen(3000, () => {
  console.log("Start on port 3000.");
});
