
const { Market } = require("../model");

module.exports = async () => {
  await Market.bulkCreate([
    { name: "Marché Central" },
    { name: "Souk Hay Salam" },
  ]);

  console.log("✅ Markets seeded");
};