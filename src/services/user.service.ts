import UserModel from '../model/UserModel';
import IUser from '../interfaces/User/IUser';
import { IUserModel } from '../interfaces/User/IUserModel';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse'; 

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) { }

  public async getByEmail(email: string): Promise<ServiceResponse<IUser>> {
    const userEmail = await this.userModel.findByEmail(email);
    if (!userEmail) return { 
      status: 'UNAUTHORIZED',
      data: { message: 'email ou password invalidos!' } 
    }
    return { status: 'SUCCESSFUL', data: userEmail };
  }

  public async getById(id: string): Promise<unknown>{
    const user = await this.userModel.findById(id);
    if (!user) return {
      status: 401,
      message: { message: `O id ${id} não foi encontrado!`} }
    return { status: 200, message: { role: user.role }};
  }

  public async createUser(
    name: string,
    role: string,
    email: string,
    password: string
  ): Promise<ServiceResponse<IUser | ServiceMessage>> {
    const emailExist = await this.userModel.findByEmail(email);
    if(emailExist) return { status: 'CONFLICT', data: { message: 'Email ja cadastrado!' }};
    const user = await this.userModel.createUser(
    name,
    role,
    email,
    password,
    );
    return { status: 'CREATE', data: user };
  }

  public async deleteUser(id: number): Promise<ServiceResponse<ServiceMessage>>{
    const exist = await this.userModel.deleteUser(id);
    if(!exist) return {status: 'NOT_FOUND', data: { message: 'Usuario nao encontrado!' }}
    return {status: 'SUCCESSFUL', data: { message: 'Usuario deletado!' }}
  }
}
