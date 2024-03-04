"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Director_1 = __importDefault(require("./Director"));
const Studio_1 = __importDefault(require("./Studio"));
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
    launch: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATEONLY
    },
    directorId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'director_id'
    },
    studioId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'studio_id'
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'movies',
    timestamps: false,
});
Movie.belongsTo(Studio_1.default, { foreignKey: 'studioId', as: 'studio' });
Movie.belongsTo(Director_1.default, { foreignKey: 'directorId', as: 'director' });
Director_1.default.hasMany(Movie, { foreignKey: 'directorId', as: 'director' });
Studio_1.default.hasMany(Movie, { foreignKey: 'studioId', as: 'studio' });
exports.default = Movie;
