import { Router, Request, Response} from 'express';
import ProductionController from '../controller/production.controller';

const productionRouter = new ProductionController();

const router = Router();

router.get('/', (req: Request, res: Response) => productionRouter.getAllProduction(req, res));

export default router;