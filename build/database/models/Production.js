"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Actor_1 = __importDefault(require("./Actor"));
const Movie_1 = __importDefault(require("./Movie"));
const Director_1 = __importDefault(require("./Director"));
const _1 = __importDefault(require("."));
const Studio_1 = __importDefault(require("./Studio"));
class Production extends sequelize_1.Model {
}
Production.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    actorsId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'actors_id',
    },
    movieId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'movies_id',
    },
    directorId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'directors_id',
    },
    studioId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'studio_id',
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'products',
    timestamps: false,
});
Production.belongsTo(Director_1.default, { foreignKey: 'directorId', as: 'director' });
Production.belongsTo(Studio_1.default, { foreignKey: 'studioId', as: 'studio' });
Movie_1.default.belongsToMany(Actor_1.default, {
    foreignKey: 'movieId',
    otherKey: 'actorsId',
    as: 'actors',
    through: Production
});
Actor_1.default.belongsToMany(Movie_1.default, {
    foreignKey: 'actorsId',
    otherKey: 'movieId',
    as: 'movies',
    through: Production
});
exports.default = Production;
