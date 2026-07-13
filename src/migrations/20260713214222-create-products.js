'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("parcels", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  farmerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "farmers",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },

  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  area: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },

  location: {
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
