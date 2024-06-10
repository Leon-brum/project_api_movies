import { Router } from 'express';
import userRouter from './userRouter';
import actorRouter from './actorRouter';
import directorRouter from './directorRouter';
import movieRouter from './movieRouter';
import studioRouter from './studioRouter';
import movieActroRouter from './movieActorRouter';
import movieGenderRouter from './movieGenderRouter';
import wishlistRouter from './wishlistRouter';

const router = Router();

router.use('/login', userRouter);
router.use('/actor', actorRouter);
router.use('/director', directorRouter);
router.use('/movie', movieRouter);
router.use('/studio', studioRouter);
router.use('/movieActor', movieActroRouter);
router.use('/movieGender', movieGenderRouter);
router.use('/wishlist', wishlistRouter);


export default router;