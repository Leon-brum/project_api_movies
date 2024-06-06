import { Router, Request, Response} from 'express';
import MovieGenderController from '../controller/movieGender.controller';

const movieGenderRouter = new MovieGenderController();

const router = Router();

router.get('/', (req: Request, res: Response) => movieGenderRouter.findAll(req, res));

export default router;