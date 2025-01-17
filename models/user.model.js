const { Sequelize, Model, DataTypes } = require("sequelize");

const db = require("../db/db");

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
);

module.exports = User;
