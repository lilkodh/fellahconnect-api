'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("market_prices", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  marketId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "markets",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },

  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "products",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },

  pricePerKg: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },

  recordedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },

  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
