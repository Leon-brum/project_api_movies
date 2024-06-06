import Gender from "../database/models/Gender";
import Movie from "../database/models/Movie";
import MovieGender from "../database/models/MovieGender";
import IMovieGender from "../interfaces/MovieGender/IMovieGender";
import { IMovieGenderModel } from "../interfaces/MovieGender/IMovieGenderModel";

export default class MovieGenderModel implements IMovieGenderModel {
  private model = MovieGender;

  async findAll(): Promise<IMovieGender[]> {
    const moviesActors = await this.model.findAll({
      include: [{
        model: Gender,
        as: 'gender',
        attributes: { exclude: ['id'] }
      },
      {
      model: Movie,
      as: 'movie',
      attributes: { exclude: ['id'] }
      }]
    });
    return moviesActors as IMovieGender[];
  }
}