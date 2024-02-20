import IProduction from "../interfaces/Production/IProduction";
import { IProductionModel } from "../interfaces/Production/IProductionModel";
import Production from "../database/models/Production";

export default class ProductionModel implements IProductionModel {
  private model = Production;

  async findAll(): Promise<IProduction[]> {
    const productions = await this.model.findAll()
    return productions;
  }
}