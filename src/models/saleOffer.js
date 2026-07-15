module.exports = (sequelize, DataTypes) => {
  const SaleOffer = sequelize.define(
    "SaleOffer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      harvestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      marketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      quantity: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      askingPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM(
          "PENDING",
          "ACCEPTED",
          "REJECTED",
          "SOLD"
        ),
        allowNull: false,
        defaultValue: "PENDING",
      },
    },
    {
      tableName: "sale_offers",
      timestamps: true,
    }
  );

  return SaleOffer;
};