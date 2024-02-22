import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Movie from './Movie';
import Actor from './Actor';

class MoiveActor extends Model<InferAttributes<MoiveActor>,
InferCreationAttributes<MoiveActor>>{
  declare id: CreationOptional<number>;

  declare movieId: number;

  declare actorId: number;

}

MoiveActor.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
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

Movie.belongsToMany(Actor, { 
  foreignKey: 'movieId',
  otherKey: 'actorId',
  as: 'actors',
  through: MoiveActor
});
Actor.belongsToMany(Movie, {
  foreignKey: 'actorId',
  otherKey: 'movieId',
  as: 'movies',
  through: MoiveActor
});

export default MoiveActor;
  