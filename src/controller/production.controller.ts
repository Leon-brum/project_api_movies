import { Request, Response } from "express";
import ProductionService from "../services/production.service";
import mapStatusHTTP from "../utils/MapStatusHTTP";

export default class ProductionController {
  constructor(
    private productionService = new ProductionService()
  ) { }
  
  public async getAllProduction(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.productionService.getAllProduction();
    
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}