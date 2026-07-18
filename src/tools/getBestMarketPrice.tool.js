const { Product, MarketPrice, Market } = require("../models");

class GetBestMarketPriceTool {
  execute = async (product) => {
    const productFound = await Product.findOne({
      where: {
        name: product,
      },
    });

    if (!productFound) {
        console.log("Product not found");

      return {
        success: false,
        message: "Product not found.",
      
      };
    }

    const bestPrice = await MarketPrice.findOne({
      where: {
        productId: productFound.id,
      },
     order: [["pricePerKg", "ASC"]],
      include: [
        {
          model:Market,
        }
      ]
    });
  if(!bestPrice){
      console.log("No market price found");

   return{
success: false ,
 message: "No market prices found for this product.",

   }  
  }
   console.log("Best price:", bestPrice);

return {
  success: true,
  product: productFound.name,
  market: bestPrice.Market.name,
  price: bestPrice.pricePerKg,
  date: bestPrice.recordedAt,
};
  };
}

module.exports = new GetBestMarketPriceTool();
