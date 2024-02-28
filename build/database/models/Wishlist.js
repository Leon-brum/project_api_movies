"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Movie_1 = __importDefault(require("./Movie"));
const User_1 = __importDefault(require("./User"));
class Wishlist extends sequelize_1.Model {
}
Wishlist.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'user_id'
    },
    movieId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'movie_id'
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'wishlists',
    timestamps: false,
});
User_1.default.belongsToMany(Movie_1.default, {
    foreignKey: 'userId',
    otherKey: 'movieId',
    as: 'movies',
    through: Wishlist
});
Movie_1.default.belongsToMany(User_1.default, {
    foreignKey: 'movieId',
    otherKey: 'userId',
    as: 'users',
    through: Wishlist
});
exports.default = Wishlist;
