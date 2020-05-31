'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "How i stoped smoke ",
          description: "a free method to do it !",
          backgroundColor:"#6fa832",
          color:"#03010d",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId:1
        },
        {
          title: "how i started programming",
          description: "It started with a fight video game editor called mugen",
          backgroundColor:"#4d2a82",
          color:"#03010d",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId:2
        }
    ],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('homepages', null, {});
  }
};
