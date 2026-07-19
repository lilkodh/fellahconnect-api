const { SaleOffer, Harvest, Market } = require("../models");
class CreateSaleOfferTool {
  execute = async ({ harvestId, marketId, price }) => {
const harvestFound = await Harvest.findByPk(harvestId);

if (!harvestFound) {
  return {
    success: false,
    message: "Harvest not found.",
  };
}

const marketFound = await Market.findByPk(marketId);

if (!marketFound) {
  return {
    success: false,
    message: "Market not found.",
  };
}
const createdSaleOffer = await SaleOffer.create({
  harvestId,
  marketId,
  price,
});
console.log(createdSaleOffer);
return {
  success: true,
  message: "Sale offer created successfully.",
  saleOffer: {
    id: createdSaleOffer.id,
    harvestId: createdSaleOffer.harvestId,
    marketId: createdSaleOffer.marketId,
    price: createdSaleOffer.price,
  },
};
  };
}

module.exports = new CreateSaleOfferTool();