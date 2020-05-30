'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('story', {
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    // homepageId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  Story.associate = function(models) {
    Story.belongsTo(models.homepage)
  };
  return Story;
};