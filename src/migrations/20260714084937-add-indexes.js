'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addIndex("farmers", ["userId"]);

    await queryInterface.addIndex("parcels", ["farmerId"]);

    await queryInterface.addIndex("harvests", ["parcelId"]);

    await queryInterface.addIndex("harvests", ["productId"]);

    await queryInterface.addIndex("market_prices", ["marketId"]);

    await queryInterface.addIndex("market_prices", ["productId"]);

    await queryInterface.addIndex("sale_offers", ["harvestId"]);

    await queryInterface.addIndex("sale_offers", ["marketId"]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeIndex("sale_offers", ["marketId"]);

    await queryInterface.removeIndex("sale_offers", ["harvestId"]);

    await queryInterface.removeIndex("market_prices", ["productId"]);

    await queryInterface.removeIndex("market_prices", ["marketId"]);

    await queryInterface.removeIndex("harvests", ["productId"]);

    await queryInterface.removeIndex("harvests", ["parcelId"]);

    await queryInterface.removeIndex("parcels", ["farmerId"]);

    await queryInterface.removeIndex("farmers", ["userId"]);

  }
};