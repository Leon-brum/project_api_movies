import IGender from './IGender';
import { ID } from '..';

export interface IGenderModel {
  findAll(): Promise<IGender[]>,
  findId(id: ID): Promise <IGender | null>
  createGender(
    name: IGender['name'],
  ): Promise<IGender>;
  deleteGender(id:ID): Promise<boolean>
}