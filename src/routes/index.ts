import { Router } from 'express';
import userRouter from './userRouter';
import actorRouter from './actorRouter';
import movieRouter from './movieRouter';
import studioRouter from './studioRouter';
import productionRouter from './productionRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/actor', actorRouter);
router.use('/movie', movieRouter);
router.use('/studio',studioRouter);
router.use('/production', productionRouter);

export default router;