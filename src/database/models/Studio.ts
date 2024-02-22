import {
  DataTypes, 
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import db from '.';
import Movie from './Movie';

class Studio extends Model<InferAttributes<Studio>,
InferCreationAttributes<Studio>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare movieId: number;
}

Studio.init({
  id: {
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false, 
    type: DataTypes.STRING
  },
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id'
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'studios',
  timestamps:false,
})

Studio.hasMany(Movie, { foreignKey: 'movieId', as: 'movies' })

export default Studio;
