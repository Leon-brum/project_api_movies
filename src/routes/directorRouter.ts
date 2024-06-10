import { Router, Request, Response} from 'express';
import DirecotrController from '../controller/director.controller';

const direcotrController = new DirecotrController()

const router = Router();

router.get('/', (req:Request, res: Response) => direcotrController.findAll(req,res));

router.get('/:id', (req:Request, res: Response) => direcotrController.findById(req,res));

router.post('/', (req, res) => direcotrController.createDirector(req, res));

router.delete('/:id', (req: Request, res: Response) => 
direcotrController.deleteDirector(req, res));

export default router; 