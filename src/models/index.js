const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Market = require("./market")(sequelize, DataTypes);
const MarketPrice = require("./marketPrice")(sequelize, DataTypes);
const Product = require("./product")(sequelize, DataTypes);

Market.hasMany(MarketPrice, {
  foreignKey: "marketId",
});

MarketPrice.belongsTo(Market, {
  foreignKey: "marketId",
});

Product.hasMany(MarketPrice, {
  foreignKey: "productId",
});

MarketPrice.belongsTo(Product, {
  foreignKey: "productId",
});

module.exports = {
  Market,
  MarketPrice,
  Product,
};