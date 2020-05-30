'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("homepage", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "homepages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
      await queryInterface.addColumn("story", "homepageId", {
      type: Sequelize.INTEGER,
      references: {
        model: "storys",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn("homepage","userId")
    await queryInterface.removeColumn("story","homepageId")
  }
};
