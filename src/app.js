const express = require("express");
const app = express();

app.use(express.json());


const marketRoutes = require("./routes/market.routes");
const marketPriceRoutes = require("./routes/marketPrice.routes");
const productRoutes = require("./routes/product.routes");

app.use("/markets", marketRoutes);
app.use("/market-prices", marketPriceRoutes);
app.use("/products", productRoutes);

module.exports = app;