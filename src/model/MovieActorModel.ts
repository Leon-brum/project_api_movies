import Actor from "../database/models/Actor";
import Movie from "../database/models/Movie";
import MoiveActor from "../database/models/MovieActor";
import IMoiveActor from "../interfaces/MovieActor/IMovieActor";
import { IMovieActorModel } from "../interfaces/MovieActor/IMovieActorModel";

export default class MovieActorModel implements IMovieActorModel {
  private model = MoiveActor;

  async findAll(): Promise<IMoiveActor[]> {
    const moviesActors = await this.model.findAll({
      include: [{
        model: Actor,
        as: 'actor',
        attributes: { exclude: ['id'] }
      },
      {
      model: Movie,
      as: 'movie',
      attributes: { exclude: ['id'] }
      }]
    });
    return moviesActors as IMoiveActor[];
  }
}