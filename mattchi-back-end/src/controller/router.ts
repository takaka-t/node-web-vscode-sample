import express from "express";
const router = express.Router();

//ルーティング
import sampleController from "./sampleController";
router.use("/sample", sampleController);

export default router;
