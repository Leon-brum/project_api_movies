import { Router, Request, Response } from 'express'; 
import MovieController from '../controller/movie.controller';


const movieController = new MovieController()

const router = Router();

router.get('/', (req:Request, res: Response) => 
movieController.findAll(req,res));

router.get('/:id', (req: Request, res: Response)=>
movieController.finById(req,res));

router.post('/', (req,res) => movieController.createMovie(req, res));

router.delete('/:id', (req: Request, res: Response) => movieController.deleteMovie(req,res));

export default router; 
