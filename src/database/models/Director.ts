import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Movie from './Movie';

class Director extends Model<InferAttributes<Director>,
InferCreationAttributes<Director>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare age: number;

  declare movieId: number;
}

Director.init({
  id: {
    allowNull: false,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING
  },
  age: {
    allowNull:false,
    type: DataTypes.DATE
  }, 
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id'
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'directors',
  timestamps: false,
})

Director.hasMany(Movie, { foreignKey: 'movieId', as: 'movies' })

export default Director;