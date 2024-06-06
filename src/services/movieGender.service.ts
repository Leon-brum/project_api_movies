import MovieGenderModel from '../model/MovieGenderModel';
import IMovieGender from '../interfaces/MovieGender/IMovieGender';
import { IMovieGenderModel } from '../interfaces/MovieGender/IMovieGenderModel';
import { ServiceResponse } from '../utils/ServiceResponse';

export default class MovieGenderService {
  constructor(private movieGenderModel:
    IMovieGenderModel = new MovieGenderModel()
  ) { }
  public async getAll(): Promise<ServiceResponse<IMovieGender[]>>{
    const moviesGender = await this.movieGenderModel.findAll();
    return { status: 'SUCCESSFUL', data: moviesGender };
  };
}