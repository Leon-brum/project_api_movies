import User from "../database/models/User";
import Movie from "../database/models/Movie";
import Wishlist from "../database/models/Wishlist";
import IWishlist from "../interfaces/Wishlist/IWishlist";
import { IWishlistModel } from "../interfaces/Wishlist/IWishlistModel";

export default class WishlistModel implements IWishlistModel {
  private model = Wishlist;

  async findAll(): Promise<IWishlist[]> {
    const moviesActors = await this.model.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['id'] }
      },
      {
      model: Movie,
      as: 'movie',
      attributes: { exclude: ['id'] }
      }]
    });
    return moviesActors as IWishlist[];
  }
}