class GetBestMarketPriceTool {

    execute = async (product) => {

        return {
            market: "Casablanca",
            product,
            price: 14.5
        };

    };

}

module.exports = new GetBestMarketPriceTool();