import { ID } from '..'; 
import IDirector from './IDirector';

export interface IDirectorModel {
    findAll(): Promise<IDirector[]>,
    findById(id: ID): Promise <IDirector | null>
    
    createDirector(
        name: IDirector['name'],
        age: IDirector['age'],
    ): Promise<IDirector>;
    deleteDirector(id:ID): Promise<boolean>
}