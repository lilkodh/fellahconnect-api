Market.hasMany(MarketPrice,{
 foreignKey:"marketId"
});


MarketPrice.belongsTo(Market,{
 foreignKey:"marketId"
});


Product.hasMany(MarketPrice,{
 foreignKey:"productId"
});


MarketPrice.belongsTo(Product,{
 foreignKey:"productId"
});