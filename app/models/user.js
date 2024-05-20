import {Sequelize, DataTypes, Model}  from 'sequelize';
import { database } from '../database.js';

 class User extends Model {} 
    User.init(
        {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
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
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            onUpdate: DataTypes.NOW,
        },
    },{
    sequelize: database,
    modelName: "User"
}
);
export default User;