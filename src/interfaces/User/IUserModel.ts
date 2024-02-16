import IUser from './IUser';
// 


export interface IUserModel {
  findByEmail(email: IUser['email']): Promise<IUser | null>
  findById(id: string): Promise<IUser | null>
  createUser(
    name: IUser['name'],
    role: IUser['role'],
    email: IUser['email'],
    password: IUser['password']
  ): Promise<IUser>;
}
