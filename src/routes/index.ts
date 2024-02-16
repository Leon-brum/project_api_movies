import { Router } from 'express';
import userRouter from './userRouter';
import actorRouter from './actorRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/actor',actorRouter);

export default router;