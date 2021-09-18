const Sequelize = require("sequelize");
const db = require("../config/database");

const author = db.define("author", {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  author_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = author;

