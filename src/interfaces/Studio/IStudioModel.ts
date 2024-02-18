import IStudio from './IStudio';
import { ID } from '..';

export interface IStudioModel {
    findAll(): Promise<IStudio[]>,
    findById(id:ID): Promise <IStudio | null>

    createStudio(
        name: IStudio['name'],
    ): Promise<IStudio>;
    deleteStudio(id:ID): Promise<boolean>
}