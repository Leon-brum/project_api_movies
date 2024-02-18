import { Router, Request, Response } from 'express'; 
import DirectorController from '../controller/director.controller';

const directorController = new DirectorController()

const router = Router();

router.get('/',( req: Request, res: Response)=>
directorController.findAll(req,res));

router.get('/:id', (req: Request, res: Response) =>
directorController.findById(req,res));

router.post('/', (req,res) => directorController.createDirector(req, res));

router.delete ('/:id', (req: Request, res: Response) => 
directorController.deleteDirector(req, res));

export default router;