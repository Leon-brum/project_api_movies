import {
    DataTypes, 
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

import db from '.';

class Franchise extends Model<InferAttributes<Franchise>,InferCreationAttributes<Franchise>> {
    declare id:  CreationOptional<number>;
    declare name: string;
    declare launch: number;
}

Franchise.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull:false,
        type: DataTypes.STRING
      },

      launch: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
},{
    sequelize: db,
    underscored: true,
    modelName:'franchises',
    timestamps: false,
})

export default Franchise