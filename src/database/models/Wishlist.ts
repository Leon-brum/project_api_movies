import {
  DataTypes, 
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import db from '.';
import User from './User';
import Movie from './Movie';

class Wishlist extends Model<InferAttributes<Wishlist>,
InferCreationAttributes<Wishlist>>{
  declare id: CreationOptional<number>;

  declare userId: number;

  declare moviesId: number;
}

Wishlist.init({
  id: {
    allowNull: false,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  moviesId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movies_id',
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'users',
  timestamps: false,
})

User.belongsToMany(Movie, { 
  foreignKey: 'userId',
  otherKey: 'moviesId',
  as: 'movies',
  through: Wishlist
});
Movie.belongsToMany(User, { 
  foreignKey: 'moviesId',
  otherKey: 'userId',
  as: 'users',
  through: Wishlist 
});

export default Wishlist;