import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import Movie from './Movie';
import Gender from './Gender';

class MovieGender extends Model<InferAttributes<MovieGender>,
InferCreationAttributes<MovieGender>>{
  declare movieId: number;

  declare genderId: number;

}

MovieGender.init({
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id'
  },
  genderId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'gender_id'
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'movies_generous',
  timestamps: false,
});

MovieGender.belongsTo(Movie, { foreignKey: 'movieId', as: 'movie' })
MovieGender.belongsTo(Gender, { foreignKey: 'genderId', as: 'gender' })

Movie.belongsToMany(Gender, { 
  foreignKey: 'movieId',
  otherKey: 'genderId',
  as: 'generous',
  through: MovieGender
});
Gender.belongsToMany(Movie, {
  foreignKey: 'genderId',
  otherKey: 'movieId',
  as: 'movies',
  through: MovieGender
});

export default MovieGender;
  