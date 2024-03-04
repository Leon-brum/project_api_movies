import { Router, Request, Response} from 'express';
import MovieActorController from '../controller/movieActor.controller';

const movieActorRouter = new MovieActorController();

const router = Router();

router.get('/', (req: Request, res: Response) => movieActorRouter.findAll(req, res));

export default router;