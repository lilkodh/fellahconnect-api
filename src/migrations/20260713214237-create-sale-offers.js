'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable("sale_offers", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  harvestId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "harvests",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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

  quantity: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },

  askingPrice: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },

  status: {
    type: Sequelize.ENUM("PENDING","ACCEPTED","REJECTED","SOLD"),
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
