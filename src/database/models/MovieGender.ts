import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Movie from './Movie';
import Gender from './Gender';

class MoiveGender extends Model<InferAttributes<MoiveGender>,
InferCreationAttributes<MoiveGender>>{
  declare id: CreationOptional<number>;

  declare movieId: number;

  declare genderId: number;

}

MoiveGender.init({
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

Movie.belongsToMany(Gender, { 
  foreignKey: 'movieId',
  otherKey: 'genderId',
  as: 'generous',
  through: MoiveGender
});
Gender.belongsToMany(Movie, {
  foreignKey: 'genderId',
  otherKey: 'movieId',
  as: 'movies',
  through: MoiveGender
});

export default MoiveGender;
  