import {
    DataTypes, 
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

import db from '.';

class Studio extends Model<InferAttributes<Studio>,
InferCreationAttributes<Studio>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare movies: string;
    declare franchises: string;
    declare actors: string;
    }

Studio.init({
    id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      movies: {
        allowNull: false,
        type: DataTypes.STRING
      },
      franchises: {
        allowNull: false,
        type: DataTypes.STRING
      },
      actors: {
        allowNull: false,
        type: DataTypes.STRING
      },
},{
    sequelize: db,
    underscored: true,
    modelName: 'studios',
    timestamps:false,
})

export default Studio