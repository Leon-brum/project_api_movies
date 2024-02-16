import IActor from './IActor';
import { ID } from '..';
export interface IActorModel {
    findAll(): Promise<IActor[]>,
    findId(id: ID): Promise <IActor | null>
}