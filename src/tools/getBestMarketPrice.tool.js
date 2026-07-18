const { Product, MarketPrice, Market } = require("../models");

class GetBestMarketPriceTool {

  execute = async (product) => {

    const productFound = await Product.findOne({
      where: {
        name: product
      }
    });

    if (!productFound) {
      return {
        success: false,
        message: "Product not found."
      };
    }

    return {
      success: true,
      product: productFound
    };

  };

}

module.exports = new GetBestMarketPriceTool();