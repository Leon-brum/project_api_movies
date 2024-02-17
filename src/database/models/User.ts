import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class User extends Model<InferAttributes<User>,
InferCreationAttributes<User>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare role: string;

  declare email: string;

  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'users',
  timestamps: false,
})

export default User;