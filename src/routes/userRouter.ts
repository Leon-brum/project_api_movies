import { Router, Request, Response } from 'express';
import UserController from '../controller/user.controller';
import userValidations from '../middlewares/userValidations'

const userController = new UserController()

const router = Router();

router.get('/role',
userValidations.token,
(req: Request, res: Response) => userController.findById(req, res));

router.post('/',
userValidations.login,
(req, res) => userController.login(req, res));

router.post('/create', (req, res) => userController.createUser(req, res));

export default router;