const {Sequelize, Datatypes} =require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const User = sequelize.define(
    'User',{
        username:{
            type: Datatypes.STRING,
            allowNull: false,
        },email:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        password:{
            type: Datatypes.STRING,
            allowNull: false,
        }
    }
)
console.log(User === sequelize.models.User);