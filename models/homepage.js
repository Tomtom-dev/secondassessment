'use strict';
module.exports = (sequelize, DataTypes) => {
  const Homepage = sequelize.define('Homepage', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    backgroundColor: DataTypes.STRING,
    color: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Homepage.associate = function(models) {
    // associations can be defined here
  };
  return Homepage;
};