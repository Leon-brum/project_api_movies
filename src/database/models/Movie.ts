import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Movie extends Model<InferAttributes<Movie>,
InferCreationAttributes<Movie>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare gender: string;

  declare launch: Date;
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
}, {
  sequelize: db,
  underscored: true,
  modelName: 'movies',
  timestamps: false,
});

export default Movie;
  