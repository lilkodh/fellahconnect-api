const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const User = require("./user");
const Farmer = require("./farmer");
const Parcel = require("./parcel");
const Harvest = require("./harvest");
const Product = require("./product")(sequelize, DataTypes);
const Market = require("./market")(sequelize, DataTypes);
const MarketPrice = require("./marketPrice")(sequelize, DataTypes);
const SaleOffer = require("./saleOffer")(sequelize, DataTypes);

User.hasOne(Farmer, {
  foreignKey: "userId",
});

Farmer.belongsTo(User, {
  foreignKey: "userId",
});

Farmer.hasMany(Parcel, {
  foreignKey: "farmerId",
});

Parcel.belongsTo(Farmer, {
  foreignKey: "farmerId",
});

Parcel.hasMany(Harvest, {
  foreignKey: "parcelId",
});

Harvest.belongsTo(Parcel, {
  foreignKey: "parcelId",
});

Product.hasMany(Harvest, {
  foreignKey: "productId",
});

Harvest.belongsTo(Product, {
  foreignKey: "productId",
});

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

Harvest.hasMany(SaleOffer, {
  foreignKey: "harvestId",
});

SaleOffer.belongsTo(Harvest, {
  foreignKey: "harvestId",
});

Market.hasMany(SaleOffer, {
  foreignKey: "marketId",
});

SaleOffer.belongsTo(Market, {
  foreignKey: "marketId",
});

module.exports = {
  User,
  Farmer,
  Parcel,
  Harvest,
  Product,
  Market,
  MarketPrice,
  SaleOffer,
};