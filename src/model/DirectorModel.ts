import Director from '../database/models/Director'; 
import IDirector from '../interfaces/Director/IDirector';
import { IDirectorModel } from '../interfaces/Director/IDirectorModel';

export default class DirectorModel implements IDirectorModel {
    private model = Director;

    async findAll(): Promise<IDirector[]> {
       const directors = await this.model.findAll();
       return directors;
    }

    async findId(id: number): Promise<IDirector | null> {
         const director = await this.model.findByPk(id);
         return director;
     }
    
    async createDirector(name: string, age: number): Promise<IDirector> {
         const director = await this.model.create({
            name,
            age
        }) 
        return director;
     }
    
    async deleteDirector(id: number): Promise<boolean> {
        const rowsDeleted = await this.model.destroy({
            where: { id } 
        })
        return rowsDeleted > 0
    }
}