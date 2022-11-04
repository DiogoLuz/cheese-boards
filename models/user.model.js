const { Sequelize, Model, DataTypes } = require("sequelize");

const db = require("../db/db");

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
),
  { sequelize: db };

module.exports = User;
