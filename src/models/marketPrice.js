module.exports = (sequelize, DataTypes) => {
  const MarketPrice = sequelize.define(
    "MarketPrice",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      marketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      pricePerKg: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      recordedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "market_prices",
      timestamps: true,
    },
  );

  return MarketPrice;
};
