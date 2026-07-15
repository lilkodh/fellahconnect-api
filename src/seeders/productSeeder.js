
const { Product } = require("../model");

module.exports = async () => {
  await Product.bulkCreate([
    { name: "Tomate" },
    { name: "Pomme de terre" },
    { name: "Oignon" },
  ]);

  console.log("✅ Products seeded");
};