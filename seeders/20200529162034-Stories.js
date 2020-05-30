'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("stories",[
      {
        name:"epic fail",
        content:"during holidays i went to feed the chicken, then the rooster arrive and jump on me trying to reach my head and bite my legs. I flee.",
        imageUrl:"https://trustmyscience.com/wp-content/uploads/2019/09/deces-blessures-coq-750x400.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId:1
      },
      {
        name:"epic meet",
        content:"In london, chelsea district i saw a famous actor on the street. i stared at him weird, he imitate me and pass away. I should have ask a picture.",
        imageUrl:"https://3sztbw4a0trwgvf4b3onphvv-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/Bill-Nighy-small-WEB.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId:2
      },
      {
        name:"epic museum",
        content:"In a cinema Museum i started to exchange with a guy about the technics and how amazing the collection was. This friendly man was the miniature creator who reunite  ",
        imageUrl:"https://img.20mn.fr/h2yDuKBPTB-92cingUnCIA/640x410_laurie-corbier-responsable-collection-cinema-sein-musee-miniature-cinema-lyon-reussi-rassembler-pieces-cinq-costumes-super-heros-eparpillees-travers-m.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId:2
      },
      {
        name:"another epic meeting",
        content:"I went snorkeling around a boat. i started to see some fishes, then bigger one, then turtles .When i looked back i was alone and surrounded by 5 turtles and thousands fishes.The time stopped it was magic",
        imageUrl:"https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_green-sea-turtles-hawaii_shutterstock_600x300.ashx",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId:2
      }
    ],{})
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stories', null, {});
  }
};
