'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("harvests", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  parcelId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "parcels",
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

  quantity: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },

  harvestDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  status: {
    type: Sequelize.ENUM("AVAILABLE","RESERVED","SOLD"),
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
