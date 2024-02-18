import Movie from '../database/models/Movie';
import IMovie from '../interfaces/Movie/IMovie'
import { IMovieModel } from '../interfaces/Movie/IMovieModel';

export default class MovieModel implements IMovieModel {
    private model = Movie;

    async findAll(): Promise<IMovie[]> {
        const movies = await this.model.findAll();
        return movies;
    }
    
    async findById(id: number): Promise<IMovie | null> {
        const movie = await this.model.findByPk(id);
        return movie;
    }
    
    async createMovie(name: string, gender: string, launch: number): Promise<IMovie> {
        const movie = await this.model.create({
            name,
            gender,
            launch
        })
        return movie;        
    }

     async deleteMovie(id: number): Promise<boolean> {
        const rowsDeleted = await this.model.destroy({
            where: { id }
        })
        return rowsDeleted > 0
    }
}