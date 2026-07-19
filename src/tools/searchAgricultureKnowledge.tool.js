const pineconeService = require("../services/pinecone.service");

module.exports = {
  name: "searchAgricultureKnowledge",

  description:
    "Search agricultural knowledge and farming advice using semantic search.",

  execute: async ({ query }) => {

    const result = await pineconeService.search(query);

    return result;
  },
};