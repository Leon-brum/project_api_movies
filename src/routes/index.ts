import { Router } from "express";
import userRouter from "./userRouter";

const router = Router();

router.use('/login', userRouter);

export default router;