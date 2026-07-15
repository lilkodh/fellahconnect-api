"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    const markets = await queryInterface.sequelize.query(
      `SELECT id FROM markets ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const products = await queryInterface.sequelize.query(
      `SELECT id FROM products ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );


    await queryInterface.bulkInsert("market_prices", [
      {
        marketId: markets[0].id,
        productId: products[0].id,
        pricePerKg: 8.50,
        recordedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marketId: markets[1].id,
        productId: products[1].id,
        pricePerKg: 5.00,
        recordedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("market_prices", null, {});
  },
};