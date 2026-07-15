const { MarketPrice } = require("../model");

module.exports = async () => {
  await MarketPrice.bulkCreate([
    {
      productId: 1,
      marketId: 1,
      price: 5.5
    },
    {
      productId: 2,
      marketId: 2,
      price: 3.2
    }
  ]);

  console.log("✅ Market Prices seeded");
};