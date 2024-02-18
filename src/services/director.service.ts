import DirectorModel from '../model/DirectorModel';
import IDirector from '../interfaces/Director/IDirector';
import { IDirectorModel } from '../interfaces/Director/IDirectorModel'; 
import { ID } from '../interfaces'; 
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';



export default class DirectorService{
    constructor(private directorModel: IDirectorModel = new DirectorModel()) {}

    public async getAll(): Promise<ServiceResponse<IDirector[]>>
    {
        const director = await this.directorModel.findAll();
        return { status: 'SUCCESSFUL', data: director}
    }

    public async getById(id:number): Promise<ServiceResponse<IDirector | null>>
    {
        const director = await this.directorModel.findById(id);
        if(!director) return { status: 'NOT_FOUND', data: {
            message: 'O Diretor não foi encontrado!'}
        }
    return { status: 'SUCCESSFUL', data: director}
    }

    public async createDirector(name:string, age:number): Promise<ServiceResponse<IDirector>>
    {
        const director = await this.directorModel.createDirector(name, age);

        return { status: 'SUCCESSFUL', data:director }
    }

    public async deleteDirector(id: ID): Promise<ServiceResponse<ServiceMessage>>{
        const exist = await this.directorModel.deleteDirector(id);
        if(!exist) return { status: 'NOT_FOUND', data: {
            message: 'Id não encontrado'} }
        return { status:'SUCCESSFUL', data:{
            message: 'Diretor Deletado!'
        } }        
    }  
}
