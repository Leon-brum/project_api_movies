import Director from '../database/models/Director';
import Movie from '../database/models/Movie';
import Studio from '../database/models/Studio';
import IMovie from '../interfaces/Movie/IMovie'
import { IMovieModel } from '../interfaces/Movie/IMovieModel';

export default class MovieModel implements IMovieModel {
    private model = Movie;

    async findAll(): Promise<IMovie[]> {
        const movies = await this.model.findAll({
            include: [{
                model: Studio,
                as: 'studio',
                attributes: { exclude: ['id'] }
            },
            {
                model: Director,
                as:'director',
                attributes: { exclude: ['id'] }
            }]
        });
        return movies as IMovie[];
    }
    async deleteMovie(id: number): Promise<boolean> {
        const rowsDeleted = await this.model.destroy({
            where: { id }
        })
        return rowsDeleted > 0
    }
}