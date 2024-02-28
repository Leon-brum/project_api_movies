import MovieModel from '../model/MovieModel';
import IMovie from '../interfaces/Movie/IMovie'
import { IMovieModel } from '../interfaces/Movie/IMovieModel'; 
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse'; 
import { ID } from '../interfaces';

export default class MovieService {
        constructor(private movieModel:IMovieModel = new MovieModel()){}

    public async getAll(): Promise<ServiceResponse<IMovie[]>>
     {
        const movies = await this.movieModel.findAll();
        return { status: 'SUCCESSFUL', data: movies}
    }
    public async deleteMovie(id:ID): Promise<ServiceResponse<ServiceMessage>>{
        const exist = await this.movieModel.deleteMovie(id);
        if(!exist) return { status: 'NOT_FOUND', data: { message: 'Id não encontrado' } }
        return { status: 'SUCCESSFUL', data: { message: 'Filme deletado' } }
    }
}