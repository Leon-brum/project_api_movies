"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Actor extends sequelize_1.Model {
}
Actor.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'actors',
    timestamps: false,
});
exports.default = Actor;