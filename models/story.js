'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    homepageId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  Story.associate = function(models) {
    Story.belongsTo(models.homepage)
  };
  return Story;
};