import ActorModel from '../model/ActorModel';
import IActor from '../interfaces/Actor/IActor';
import { IActorModel } from '../interfaces/Actor/IActorModel';
import {  ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';
import { ID } from '../interfaces';

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

    public async createActor(name:string, age:number):Promise<ServiceResponse<IActor>>{
        const actor = await this.actorModel.createActor(name,age);

        return { status:'SUCCESSFUL', data: actor }
    }          
    
    public async deleteActor(id:ID): Promise<ServiceResponse<ServiceMessage>>{
        const exist = await this.actorModel.deleteActor(id); 
        if (!exist) return { status:'NOT_FOUND', data: { message: 'Id não encontrado' } }
        return { status: 'SUCCESSFUL', data: { message:'Ator deletado' } }
    }
}   




