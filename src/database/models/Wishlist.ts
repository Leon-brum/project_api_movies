import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import Movie from './Movie';
import User from './User';

class Wishlist extends Model<InferAttributes<Wishlist>,
InferCreationAttributes<Wishlist>>{
  declare movieId: number;

  declare userId: number;
}

Wishlist.init({
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id'
  },
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id'
  },

}, {
  sequelize: db,
  underscored: true,
  modelName: 'wishlists',
  timestamps: false,
});

Wishlist.belongsTo(Movie, { foreignKey: 'movieId', as: 'movie' })
Wishlist.belongsTo(User, { foreignKey: 'userId', as: 'user' })

User.belongsToMany(Movie, {
  foreignKey: 'userId',
  otherKey: 'movieId',
  as: 'movies',
  through: Wishlist
});
Movie.belongsToMany(User, { 
  foreignKey: 'movieId',
  otherKey: 'userId',
  as: 'users',
  through: Wishlist
});

export default Wishlist;
  