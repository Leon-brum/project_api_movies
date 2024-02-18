import { Router } from 'express';
import userRouter from './userRouter';
import actorRouter from './actorRouter';
import movieRouter from './movieRouter';
import studioRouter from './studioRouter';
import directorRouter from './directorRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/actor', actorRouter);
router.use('/movie', movieRouter);
router.use('/studio',studioRouter);
router.use('/director', directorRouter);

export default router;