import { Router, Request, Response } from "express";
import UserController from "../controller/user.controller";

const userController = new UserController()

const router = Router();

router.get('/', (req: Request, res: Response) => userController.getAllUsers(req, res));
router.get('/:id', (req: Request, res: Response) => userController.getUserById(req, res));

export default router;