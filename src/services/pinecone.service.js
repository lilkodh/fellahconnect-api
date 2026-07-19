const pinecone = require("../config/pinecone");

const index = pinecone.index(process.env.PINECONE_INDEX);

const search = async (query) => {
  const result = await index.searchRecords({
    query: {
      topK: 3,
      inputs: {
        text: query,
      },
    },
  });

  return result;
};

module.exports = {
  search,
};