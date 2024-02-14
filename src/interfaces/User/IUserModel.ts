import IUser from './IUser';
import { ID } from '..';

export interface IUserModel {
  findAll(): Promise<IUser[]>,
  findById(id: ID): Promise<IUser | null>
}
