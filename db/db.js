const { Sequelize } = require("sequelize");
const path = require("path");
const { User, Board, Cheese } = require("../models/index");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "cheeseBoard.sqlite"),
});

async function main() {
  await db.sync({ force: true });
}

main();

module.exports = db;
