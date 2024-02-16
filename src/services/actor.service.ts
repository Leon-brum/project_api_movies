import ActorModel from '../model/ActorModel';
import IActor from '../interfaces/Actor/IActor';
import { IActorModel } from '../interfaces/Actor/IActorModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class ActorService {
    constructor(private actorModel:
        IActorModel = new ActorModel()){}

    public async getALL(): Promise<ServiceResponse<IActor[]>>{
        const actors = await this.actorModel.findAll();
        return { status: 'SUCCESSFUL', data: actors}
    }

    public async getById(id:number):
    Promise<ServiceResponse<IActor | null>>{
        const actor = await this.actorModel.findId(id);
         if (!actor) return {
            status:'NOT_FOUND', data: {message: 'O ator não foi encontrado!'}
         }
        return { status: 'SUCCESSFUL', data: actor} 
    }
}



