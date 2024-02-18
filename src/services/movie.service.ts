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

    public async getById(id:number):
    Promise<ServiceResponse<IMovie | null>>{
        const movie = await this.movieModel.findById(id);
         if(!movie) return { status: 'NOT_FOUND', data: {message: 'O filme não foi encontrado!'}
    }
    return { status: 'SUCCESSFUL', data: movie}
    }
    
    // eslint-disable-next-line max-len
    public async createMovie(name:string, gender:string, launch:number): Promise<ServiceResponse<IMovie>>{
        const movie = await this.movieModel.createMovie(name,gender, launch);

        return { status: 'SUCCESSFUL', data:movie }
    }

    public async deleteMovie(id: ID): Promise<ServiceResponse<ServiceMessage>>{
        const exist = await this.movieModel.deleteMovie(id);
        if(!exist) return { status: 'NOT_FOUND', data: { message: 'Id não encontrado' } }
        return { status: 'SUCCESSFUL', data: { message: 'Filme deletado' } }
    }
}