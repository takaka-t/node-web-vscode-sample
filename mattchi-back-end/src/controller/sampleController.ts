import express from "express";
import { TypeHelper } from "../helper/typeHelper";

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
  const numberList = [1, 2, 3, 4, 5];

  if (TypeHelper.isUndefined(req.query) === false) {
    res.status(200).send({
      sampleList: numberList.filter((x) => {
        return x % 2 == 0;
      }),
    });
  } else {
    res.status(200).send({ sampleList: numberList });
  }
});

router.post("/", async (req: express.Request, res: express.Response): Promise<void> => {
  res.status(200).send({ newId: 1 });
});

router.delete("/", async (req: express.Request, res: express.Response): Promise<void> => {
  res.status(200).send({ delId: 1 });
});

export default router;
