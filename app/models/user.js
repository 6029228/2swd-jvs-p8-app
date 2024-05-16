import {Sequelize, DataTypes, Model}  from 'sequelize';
import { database } from '../database.js';

export class User extends Model {} 
    User.init(
        {
        username:{
            type: DataTypes.STRING,
            
        },email:{
            type: DataTypes.STRING,
            
        },
        passwordHash:{
            type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    },{
    sequelize: database,
    modelName: "User"
}
);
