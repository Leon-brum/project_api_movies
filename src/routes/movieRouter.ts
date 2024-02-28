import { Router, Request, Response } from 'express'; 
import MovieController from '../controller/movie.controller';


const movieController = new MovieController()

const router = Router();

router.get('/', (req:Request, res: Response) => 
movieController.findAll(req,res));

router.delete('/:id', (req: Request, res: Response) => movieController.deleteMovie(req,res));

export default router; 
