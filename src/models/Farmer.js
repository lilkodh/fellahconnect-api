const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Farmer = sequelize.define(
  "Farmer",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "farmers",
    timestamps: true,
  }
);

Farmer.associate = (models) => {
  Farmer.hasMany(models.Parcel, {
    foreignKey: "farmerId",
    as: "parcels",
  });
};

module.exports = Farmer;