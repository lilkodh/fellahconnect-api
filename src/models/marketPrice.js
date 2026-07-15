module.exports = (sequelize, DataTypes) => {
  const MarketPrice = sequelize.define("MarketPrice", {
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return MarketPrice;
};