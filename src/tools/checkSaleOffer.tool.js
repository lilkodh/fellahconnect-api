const { SaleOffer } = require("../models");

class CheckSaleOfferTool {
  execute = async ({ saleOfferId }) => {
    const saleOfferFound = await SaleOffer.findByPk(saleOfferId);

    if (!saleOfferFound) {
      return {
        success: false,
        message: "Sale offer not found.",
      };
    }
    return {
      success: true,
      saleOffer: {
        id: saleOfferFound.id,
        harvestId: saleOfferFound.harvestId,
        marketId: saleOfferFound.marketId,
        price: saleOfferFound.price,
      },
    };
  };
}

module.exports = new CheckSaleOfferTool();
