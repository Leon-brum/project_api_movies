import Studio from '../database/models/Studio';
import IStudio from '../interfaces/Studio/IStudio';
import { IStudioModel } from '../interfaces/Studio/IStudioModel'; 

export default class StudioModel implements IStudioModel { 
    private model = Studio;

    async findAll(): Promise<IStudio[]> {
        const studios = await this.model.findAll();
        return studios;
    }

    async findById(id:number): Promise<IStudio | null > {
        const studio = await this.model.findByPk(id);
        return studio;
    }

     async createStudio(name: string): Promise<IStudio> {
        const studio = await this.model.create({
            name,
        })
        return studio
    }

     async deleteStudio(id: number): Promise<boolean> {
        const rowsDeleted = await this.model.destroy({
            where: { id }
        })
        return rowsDeleted > 0
    }

}