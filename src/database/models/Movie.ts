import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Gender from './Gender';

class Movie extends Model<InferAttributes<Movie>,
InferCreationAttributes<Movie>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare gender: string;

  declare launch: Date;

  declare genderId: number;
}

Movie.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING
  },
  launch: {
    allowNull: false,
    type: DataTypes.DATE
  },
  genderId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'gender_id'
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'movies',
  timestamps: false,
});

Movie.hasMany(Gender, { foreignKey: 'genderId', as: 'generous' });

export default Movie;
  