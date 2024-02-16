import Actor from '../database/models/Actor'; 
import IActor from '../interfaces/Actor/IActor';
import { IActorModel } from '../interfaces/Actor/IActorModel';

export default class ActorModel implements IActorModel {
    private model = Actor;

    async findAll(): Promise<IActor[]> {
       const actors = await this.model.findAll();
       return actors;
    }

    async findId(id: number): Promise<IActor | null> {
         const actor = await this.model.findByPk(id);
         return actor;
     }
    
}

