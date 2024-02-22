import {
  DataTypes, 
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import db from '.';

class Gender extends Model<InferAttributes<Gender>,
InferCreationAttributes<Gender>> {
  declare id: CreationOptional<number>;

  declare name: string;
}

Gender.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING
  },
    
}, {
  sequelize: db,
  underscored: true,
  modelName: 'generous',
  timestamps: false,
});


export default Gender