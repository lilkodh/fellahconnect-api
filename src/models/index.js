db.Product.hasMany(db.MarketPrice, { foreignKey: "productId" });
db.MarketPrice.belongsTo(db.Product, { foreignKey: "productId" });

db.Market.hasMany(db.MarketPrice, { foreignKey: "marketId" });
db.MarketPrice.belongsTo(db.Market, { foreignKey: "marketId" });