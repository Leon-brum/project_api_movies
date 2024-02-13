import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import db from '.';

class Production extends Model<InferAttributes<Production>,
InferCreationAttributes<Production>>{
  declare id: CreationOptional<number>;

  declare actorsId: number;

  declare moviesId: number;

  declare franchisesId: number;

  declare directorsId: number;
}

Production.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  actorsId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'actors_id',
    references:{
    model:'actors',
    key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate:'CASCADE'
  }, 
  moviesId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movies_id',
    references:{
      model:'movies',
      key:'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  franchisesId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'franchises_id',
    references:{
      model:'franchises',
      key:'id',
    },
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  },
  directorsId: {
    allowNull:false,
    type: DataTypes.INTEGER,
    field: 'directors_id',
    references:{
      model: 'directors',
      key:'id',
    },
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'products',
  timestamps: false,
});

