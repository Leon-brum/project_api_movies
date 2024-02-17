import { Router, Request, Response } from 'express'; 
import StudioController from '../controller/studio.controller';

const studioController = new StudioController()

const router = Router();

router.get('/', ( req: Request, res: Response)=>
studioController.findAll(req,res));

router.get('/:id', (req: Request, res: Response) => 
studioController.findById(req, res));

router.post('/', (req, res) => studioController.createStudio(req, res));

router.delete ('/:id', (req: Request, res: Response) =>
studioController.deleteStudio(req, res));

export default router;