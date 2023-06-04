import express from "express";
const router = express.Router();

// user
import createUser from "./userController/createUser";
router.use(createUser);

export default router;
