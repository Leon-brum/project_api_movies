import UserModel from '../model/UserModel';
import IUser from '../interfaces/User/IUser';
import { IUserModel } from '../interfaces/User/IUserModel';
import { ServiceResponse } from '../utils/ServiceResponse'; 

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) { }

  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const users = await this.userModel.findAll();
    return { status: 'SUCCESSFUL', data: users };
  }

  public async getById(id: number): Promise<ServiceResponse<IUser>>{
    const user = await this.userModel.findById(id);
    if (!user) return {
      status: 'NOT_FOUND',
      data: { message: `O id ${id} desse usuario nao foi encontrado`} }
    return { status: 'SUCCESSFUL', data: user};
  }
}
