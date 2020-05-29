'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    await queryInterface.addColumn("story", "homepage", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("story","homepage")
  }
};
