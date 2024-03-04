import Gender from '../database/models/Gender';
import IGender from '../interfaces/Gender/IGender';
import { IGenderModel } from '../interfaces/Gender/IGenderModel';

export default class GenderModel implements IGenderModel {
  private model = Gender;

  async findAll(): Promise<IGender[]> {
    const genders = await this.model.findAll();
    return genders;
  }

  async findId(id: number): Promise<IGender | null> {
    const gender = await this.model.findByPk(id);
    return gender;
  }

  async createGender(name: string): Promise<IGender> {
    const gender = await this.model.create({
      name
    })
    return gender;
  }

  async deleteGender(id: number): Promise<boolean> {
    const rowsDeleted = await this.model.destroy({
        where: { id } 
    })
    return rowsDeleted > 0
}
}