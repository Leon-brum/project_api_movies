import { Request, Response } from "express";
import WishlistService from "../services/wishlist.service";
import mapStatusHTTP from "../utils/MapStatusHTTP";

export default class WishlistController {
  constructor (
    private wishlistService = new WishlistService()
  ) { }
  
  public async findAll(_req: Request, res: Response): Promise<Response>{
    const serviceResponse = await this.wishlistService.getAll();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  };
}