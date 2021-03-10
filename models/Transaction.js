const Sequelize = require("sequelize");
const db = require("../database/database");

const Transaction = db.define("transactions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  providerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  vehiclePlatenumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  parkingStart: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  parkingEnd: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  requestedAt: {
    type: "TIMESTAMP",
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Transaction;
