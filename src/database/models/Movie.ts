import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Director from './Director';
import Studio from './Studio';

class Movie extends Model<InferAttributes<Movie>,
InferCreationAttributes<Movie>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare launch: Date;

  declare directorId: number;

  declare studioId: number;
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
  launch: {
    allowNull: false,
    type: DataTypes.DATE
  },
  directorId:{
    allowNull:false,
    type: DataTypes.INTEGER,
    field: 'director_id'
  },
  studioId:{
    allowNull:false,
    type: DataTypes.INTEGER,
    field: 'studio_id'
    
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'movies',
  timestamps: false,
});


Movie.belongsTo(Director, { foreignKey: 'directorId', as: 'director' });
Movie.belongsTo(Studio, { foreignKey: 'studioId', as: 'studio' });

Director.hasMany(Movie, { foreignKey: 'directorId', as: 'director' });
Studio.hasMany(Movie, { foreignKey: 'studioId', as: 'studio' });

export default Movie;
  