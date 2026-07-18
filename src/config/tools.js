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
              description: "The product name"

          },
        },
        required: ["product"],
      },
    },
  },
];

module.exports = tools;
