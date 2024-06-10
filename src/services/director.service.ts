import DirectorModel from '../model/DirectorModel';
import IDirector from '../interfaces/Director/IDirector';
import { IDirectorModel } from '../interfaces/Director/IDirectorModel';
import {  ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';
import { ID } from '../interfaces';

export default class DirectorService {
    constructor(private directorModel:
      IDirectorModel = new DirectorModel()){}

    public async getALL(): Promise<ServiceResponse<IDirector[]>>{
        const directors = await this.directorModel.findAll();
        return { status: 'SUCCESSFUL', data: directors}
    }

    public async getById(id:number):
    Promise<ServiceResponse<IDirector | null>>{
        const director = await this.directorModel.findId(id);
         if (!director) return {
            status:'NOT_FOUND', data: {message: 'O diretor não foi encontrado!'}
         }
        return { status: 'SUCCESSFUL', data: director} 
    }

    public async createDirector(name:string, age:number):Promise<ServiceResponse<IDirector>>{
        const director = await this.directorModel.createDirector(name,age);

        return { status:'SUCCESSFUL', data: director }
    }          
    
    public async deleteDirector(id:ID): Promise<ServiceResponse<ServiceMessage>>{
        const exist = await this.directorModel.deleteDirector(id); 
        if (!exist) return { status:'NOT_FOUND', data: { message: 'Id não encontrado' } }
        return { status: 'SUCCESSFUL', data: { message:'Diretor deletado' } }
    }
}   
