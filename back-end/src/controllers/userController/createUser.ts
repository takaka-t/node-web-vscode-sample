import express from "express";
const router = express.Router();

router.get("/user/createUser", async (req: express.Request, res: express.Response): Promise<void> => {
  res.status(200).json({ newId: "aaa" });
});

export default router;
