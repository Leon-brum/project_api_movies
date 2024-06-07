import IWishlist from "./IWishlist";
// import { ID } from "..";

export interface IWishlistModel {
  findAll(): Promise<IWishlist[]>,
}