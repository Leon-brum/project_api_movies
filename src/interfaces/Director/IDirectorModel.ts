import IDirector from './IDirector';
import { ID } from '..';
export interface IDirectorModel {
    findAll(): Promise<IDirector[]>,
    findId(id: ID): Promise <IDirector | null>
    createDirector(
        name: IDirector['name'],
        age: IDirector['age']
    ): Promise<IDirector>;
    deleteDirector(id:ID): Promise<boolean>
}