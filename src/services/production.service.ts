import ProductionModel from '../model/ProductionModel';
import IProduction from '../interfaces/Production/IProduction';
import { IProductionModel } from '../interfaces/Production/IProductionModel';
import {  ServiceResponse } from '../utils/ServiceResponse';


export default class ProductionService {
  constructor(
    private productionModel: IProductionModel = new ProductionModel()
  ) { }

  public async getAllProduction(): Promise<ServiceResponse<IProduction[]>>{
    const productions = await this.productionModel.findAll();
    return { status: 'SUCCESSFUL', data: productions };
  }
}