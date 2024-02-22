import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import Actor from './Actor';
import Movie from './Movie';
import Director from './Director';

import db from '.';
import Studio from './Studio';

class Production extends Model<InferAttributes<Production>,
InferCreationAttributes<Production>>{
  declare id: CreationOptional<number>;

  declare actorsId: number;

  declare movieId: number;

  declare directorId: number;

  declare studioId: number;
}

Production.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  actorsId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'actors_id',
  }, 
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movies_id',
  },
  directorId: {
    allowNull:false,
    type: DataTypes.INTEGER,
    field: 'directors_id',
  },
  studioId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'studio_id',
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'productions',
  timestamps: false,
});

Production.belongsTo(Director, { foreignKey: 'directorId', as: 'director' });
Production.belongsTo(Studio, { foreignKey: 'studioId', as: 'studio' });

Movie.belongsToMany(Actor, { 
  foreignKey: 'movieId',
  otherKey: 'actorsId',
  as: 'actors',
  through: Production
});
Actor.belongsToMany(Movie, { 
  foreignKey: 'actorsId',
  otherKey: 'movieId',
  as: 'movies',
  through: Production 
});

export default Production;