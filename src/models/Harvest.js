const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Harvest = sequelize.define(
  "Harvest",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    parcelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    harvestDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("AVAILABLE", "RESERVED", "SOLD"),
      allowNull: false,
    },
  },
  {
    tableName: "harvests",
    timestamps: true,
  }
);

Harvest.associate = (models) => {
  Harvest.belongsTo(models.Parcel, {
    foreignKey: "parcelId",
    as: "parcel",
  });

  Harvest.belongsTo(models.Product, {
    foreignKey: "productId",
    as: "product",
  });
};

module.exports = Harvest;