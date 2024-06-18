import WishlistModel from '../model/WishlistModel';
import IWishlist from '../interfaces/Wishlist/IWishlist';
import { IWishlistModel } from '../interfaces/Wishlist/IWishlistModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class WishlistService {
  constructor(private wishlistModel:
    IWishlistModel = new WishlistModel()
  ) { }
  public async getAll(): Promise<ServiceResponse<IWishlist[]>>{
    const wishlist = await this.wishlistModel.findAll();
    return { status: 'SUCCESSFUL', data: wishlist };
  };
}