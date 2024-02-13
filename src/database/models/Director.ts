import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Director extends Model<InferAttributes<Director>,
InferCreationAttributes<Director>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare age: number;

  declare studio: string;

  declare movies: string;
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
  studio:{
    allowNull:false,
    type: DataTypes.STRING
  },
  movies:{
    allowNull: false,
    type: DataTypes.STRING
  }  
}, {
  sequelize: db,
  underscored: true,
  modelName: 'directors',
  timestamps: false,
})

export default Director;