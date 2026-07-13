'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable("farmers", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },

  firstName: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  phone: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING(255),
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
     await queryInterface.dropTable("farmers");
  }
};
