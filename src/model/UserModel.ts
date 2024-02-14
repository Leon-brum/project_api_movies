import User from "../database/models/User";
import IUser from "../interfaces/User/IUser"
import { IUserModel } from "../interfaces/User/IUserModel";

export default class UserModel implements IUserModel {
  private model = User;

  async findAll(): Promise<IUser[]> {
    const users = await this.model.findAll();
    return users;
  }
  async findById(id: number): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    return user;
  }
}