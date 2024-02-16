import { Router, Request, Response } from 'express';
import UserController from '../controller/user.controller';

const userController = new UserController()

const router = Router();

router.get('/role', (req: Request, res: Response) => userController.findById(req, res));

router.post('/', (req, res) => userController.login(req, res));

export default router;