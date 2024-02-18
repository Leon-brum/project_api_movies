"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const User_1 = __importDefault(require("./User"));
const Movie_1 = __importDefault(require("./Movie"));
class Wishlist extends sequelize_1.Model {
}
Wishlist.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'user_id',
    },
    moviesId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'movies_id',
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'users',
    timestamps: false,
});
User_1.default.belongsToMany(Movie_1.default, {
    foreignKey: 'userId',
    otherKey: 'moviesId',
    as: 'movies',
    through: Wishlist
});
Movie_1.default.belongsToMany(User_1.default, {
    foreignKey: 'moviesId',
    otherKey: 'userId',
    as: 'users',
    through: Wishlist
});
exports.default = Wishlist;
