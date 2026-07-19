

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
  {
  type: "function",
  function: {
    name: "getFarmerParcels",
    description: "Returns all parcels belonging to a farmer.",
    parameters: {
      type: "object",
      properties: {
        farmerId: {
          type: "integer",
          description: "The farmer ID",
        },
      },
      required: ["farmerId"],
    },
  },
},
{
  type: "function",
  function: {
    name: "checkSaleOffer",
    description: "Returns information about a sale offer.",
    parameters: {
      type: "object",
      properties: {
        saleOfferId: {
          type: "integer",
          description: "The sale offer ID",
        },
      },
      required: ["saleOfferId"],
    },
  },
},
{
  type: "function",
  function: {
    name: "searchAgricultureKnowledge",
    description:
      "Search agricultural knowledge, farming advice, and cultivation information.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "The agriculture question or topic to search for.",
        },
      },
      required: ["query"],
    },
  },
},
];

module.exports = tools;