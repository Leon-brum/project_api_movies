"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Movie extends sequelize_1.Model {
}
Movie.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    gender: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    launch: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'movies',
    timestamps: true,
});
exports.default = Movie;
