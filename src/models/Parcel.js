const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Parcel = sequelize.define(
  "Parcel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    farmerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    area: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "parcels",
    timestamps: true,
  }
);

module.exports = Parcel;