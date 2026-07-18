"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("markets", [
      {
        name: "Souk Casa",
        city: "Casablanca",
        region: "Casablanca-Settat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Souk Rabat",
        city: "Rabat",
        region: "Rabat-Salé-Kénitra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Souk Marrakech",
        city: "Marrakech",
        region: "Marrakech-Safi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("markets", null, {});
  },
};