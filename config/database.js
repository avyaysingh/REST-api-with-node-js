const { Sequelize } = require('sequelize');

module.exports = new Sequelize('myblog', 'avyay', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}
});

