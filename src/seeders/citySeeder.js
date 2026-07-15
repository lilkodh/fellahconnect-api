
const { City } = require("../model");

module.exports = async () => {
  await City.bulkCreate([
    { name: "Casablanca" },
    { name: "Rabat" },
  ]);

  console.log("✅ Cities seeded");
};