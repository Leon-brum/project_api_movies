import {
  DataTypes, 
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import db from '.';

class Actor extends Model<InferAttributes<Actor>,
InferCreationAttributes<Actor>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare age: number;
}

Actor.init({
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
  age: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
    
}, {
  sequelize: db,
  underscored: true,
  modelName: 'actors',
  timestamps: false,
});

export default Actor