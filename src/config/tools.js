const product = require("../models/product");

const tools = [
  {
    type: "function",
    function: {
      name: "getBestMarketPrice",
      description:
        "Returns the best market price for a given agricultural product.",
      parameters: {
        type: "object",
        properties: {
          product: {
            type: "string",
            description: "The name of the agricultural product.",
          },
        },
        required: ["product"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "searchHarvest",
      description: "search harvests by product ",
      parameters: {
        type: "object",
        properties: {
          product: {
            type: "string",
            description: "The product name",
          },
        },
        required: ["product"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "createSaleOffer",
      description: "Create a sale offer for a harvest.",
      parameters: {
        type: "object",
        properties: {
          harvestId: {
            type: "integer",
            description: "The harvest ID",
          },
          marketId: {
            type: "integer",
            description: "The market ID",
          },
          price: {
            type: "number",
            description: "Price for the sale offer",
          },
        },
        required: ["harvestId", "marketId", "price"],
      },
    },
  },
];

module.exports = tools;