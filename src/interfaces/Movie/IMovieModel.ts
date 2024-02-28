import IMovie from './IMovie';
import { ID } from '..';

export interface IMovieModel {
  findAll(): Promise<IMovie[]>,
  deleteMovie(id:ID): Promise<boolean>
}