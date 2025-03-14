//incomplete question5 code with modules npm i sequelize mysql2

//imports express and sequelize and sets up the express app
const express = require ('express');
const { stat } = require('fs');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 3000;

const sequelize = new Sequelize('')

//creates database using sequelize and defines user model with id name email and status
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
