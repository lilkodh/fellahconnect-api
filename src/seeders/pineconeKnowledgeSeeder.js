require("dotenv").config();

const fs = require("fs");
const path = require("path");

const pinecone = require("../config/pinecone");

const index = pinecone.index(process.env.PINECONE_INDEX);

async function seedKnowledge() {
  try {
    const filePath = path.join(
      __dirname,
      "../knowledge/agriculture.json"
    );

    const knowledge = JSON.parse(
      fs.readFileSync(filePath, "utf-8")
    );

    const records = knowledge.map((item) => ({
      _id: item.id,
      text: item.text,
      category: item.category,
      crop: item.crop,
      region: item.region,
    }));

    await index.upsertRecords({
      records,
    });

    console.log("✅ Agriculture knowledge inserted into Pinecone");

  } catch (error) {
    console.log("❌ Pinecone seeder error");
    console.log(error);
  }
}

seedKnowledge();