"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Tomato",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potato",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Orange",
        category: "Fruit",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Milk",
        category: "Dairy",
        unit: "liter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};