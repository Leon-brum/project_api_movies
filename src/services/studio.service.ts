import StudioModel from '../model/StudioModel';
import IStudio from '../interfaces/Studio/IStudio';
import { IStudioModel } from '../interfaces/Studio/IStudioModel'; 
import { ID } from '../interfaces'; 
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';

export default class StudioService {
    constructor(private studioModel: IStudioModel = new StudioModel()) {}

    public async getAll(): Promise<ServiceResponse<IStudio[]>>
    {
        const studios = await this.studioModel.findAll();
        return { status: 'SUCCESSFUL', data: studios }
    }

    public async getById(id:number): Promise<ServiceResponse<IStudio | null>>
    {
        const studio = await this.studioModel.findById(id);
        if(!studio) return { status: 'NOT_FOUND', data: {
            message: 'O estudio não foi encontrado!'} 
    }
    return { status: 'SUCCESSFUL', data: studio }
    }

    public async createStudio(name:string): Promise<ServiceResponse<IStudio>>{
        const studio = await this.studioModel.createStudio(name);
        
        return { status: 'SUCCESSFUL', data:studio } 
    }

    public async deleteStudio (id:ID): Promise<ServiceResponse<ServiceMessage>>{
        const exist = await this.studioModel.deleteStudio(id);
        if(!exist) return { status: 'NOT_FOUND', data: {
            message: 'Id não encontrado' }}
            return { status: 'SUCCESSFUL', data: {
                message: 'Estudio deletado'
            } }
    }
}