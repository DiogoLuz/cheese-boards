const { Sequelize, Model, DataTypes } = require("sequelize");

const db = require("../db/db");

class Cheese extends Model {}

Cheese.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Cheese;
