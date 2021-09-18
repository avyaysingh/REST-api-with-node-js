const Sequelize = require("sequelize");
const db = require("../config/database");

const comment = db.define("comment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publish_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.DataTypes.NOW,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});



module.exports = comment;
