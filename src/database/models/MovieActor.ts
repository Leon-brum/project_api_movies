import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import Movie from './Movie';
import Actor from './Actor';

class MoiveActor extends Model<InferAttributes<MoiveActor>,
InferCreationAttributes<MoiveActor>>{
  declare movieId: number;

  declare actorId: number;

}

MoiveActor.init({
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id'
  },
  actorId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'actor_id'
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'movies_actors',
  timestamps: false,
});

MoiveActor.belongsTo(Movie, { foreignKey: 'movieId', as: 'movie' })
MoiveActor.belongsTo(Actor, { foreignKey: 'actorId', as: 'actor' })

Movie.belongsToMany(Actor, { 
  foreignKey: 'movieId', 
  otherKey: 'actorId',
  as: 'actor',
  through: MoiveActor
});
Actor.belongsToMany(Movie, {
  foreignKey: 'actorId',
  otherKey: 'movieId',
  as: 'movies',
  through: MoiveActor
});

export default MoiveActor;
  