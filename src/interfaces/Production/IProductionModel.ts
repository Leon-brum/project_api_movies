import IProduction from "./IProduction";

export interface IProductionModel {
  findAll(): Promise<IProduction[]>
}