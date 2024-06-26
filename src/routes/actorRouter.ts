import { Router, Request, Response} from 'express';
import ActorController from '../controller/actor.controller';

const actorController = new ActorController()

const router = Router();

router.get('/', (req:Request, res: Response) => actorController.findAll(req,res));

router.get('/:id', (req:Request, res: Response) => actorController.findById(req,res));

router.post('/', (req, res) => actorController.createActor(req, res));

router.delete ('/:id', (req: Request, res: Response) => 
actorController.deleteActor(req, res));

export default router; 