
const citySeeder = require("./citySeeder");
const productSeeder = require("./productSeeder");
const marketSeeder = require("./marketSeeder");
const marketPriceSeeder = require("./marketPriceSeeder");

const run = async () => {
  await citySeeder();        
  await productSeeder();    
  await marketSeeder();      
  await marketPriceSeeder(); 

  console.log("🌱 DONE");
};

run();