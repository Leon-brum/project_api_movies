import User from '../database/models/User';
import IUser from '../interfaces/User/IUser'
import { IUserModel } from '../interfaces/User/IUserModel';

export default class UserModel implements IUserModel {
  private model = User;

  async findByEmail(email: string): Promise<IUser | null> {
    const userEmail = await this.model.findOne({ where: { email } });
    return userEmail;
  }

  async findById(id: string): Promise<IUser | null> {
    const userId = await this.model.findOne({ where: { id } });
    return userId;
  }
}