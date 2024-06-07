import { Router, Request, Response} from 'express';
import WishlistController from '../controller/wishlist.controller';

const wishlistRouter = new WishlistController();

const router = Router();

router.get('/', (req: Request, res: Response) => wishlistRouter.findAll(req, res));

export default router;