import MovieActorModel from '../model/MovieActorModel';
import IMoiveActor from '../interfaces/MovieActor/IMovieActor';
import { IMovieActorModel } from '../interfaces/MovieActor/IMovieActorModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class MovieActorService {
  constructor(private movieActorModel:
    IMovieActorModel = new MovieActorModel()
  ) { }
  public async getAll(): Promise<ServiceResponse<IMoiveActor[]>>{
    const moviesActors = await this.movieActorModel.findAll();
    return { status: 'SUCCESSFUL', data: moviesActors };
  };
}