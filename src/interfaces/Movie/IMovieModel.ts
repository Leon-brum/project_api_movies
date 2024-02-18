import IMovie from './IMovie';
import { ID } from '..';

export interface IMovieModel {
    findAll(): Promise<IMovie[]>,
    findById(id:ID): Promise <IMovie | null>

    createMovie(
        name: IMovie['name'],
        gender: IMovie['gender'],
        launch: IMovie['launch']
    ): Promise<IMovie>;
    deleteMovie(id:ID): Promise<boolean>
}


