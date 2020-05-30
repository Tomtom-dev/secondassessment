'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Homepages",
      [
        {
          title: "How i stoped smoke ",
          description: "5 years ago i stopped smoke and savea lot of money",
          backgroundColor:"#6fa832",
          color:"#03010d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "how i started programming",
          description: "My first approach of programming was with video game editor called mugen",
          backgroundColor:"#4d2a82",
          color:"#03010d",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Homepages', null, {});
  }
};
