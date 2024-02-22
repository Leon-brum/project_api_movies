import IProduction from "../interfaces/Production/IProduction";
import { IProductionModel } from "../interfaces/Production/IProductionModel";
import Production from "../database/models/Production";
import Actor from "../database/models/Actor";

export default class ProductionModel implements IProductionModel {
  private model = Production;

  async findAll(): Promise<IProduction[]> {
    const productions = await this.model.findAll({
      include: [{
         model: Actor,
         as: 'actors',
         attributes: ['id'] 
        }]
    })
    const mappedProductions: IProduction[] = productions.map((production) => ({
      id: production.id,
      movieId: production.movieId,
      actorsId: (production as any).actorsId.map((actor: any) => actor.id),
      directorId: production.directorId,
      studioId: production.studioId
    }));

    return mappedProductions;
  }
}