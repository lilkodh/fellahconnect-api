const express = require("express");
const app = express();

const farmerRoutes = require("./routes/farmer.routes");
const parcelRoutes = require("./routes/parcel.routes");
const harvestRoutes = require("./routes/harvest.routes");

const marketRoutes = require("./routes/market.routes");
const marketPriceRoutes = require("./routes/marketPrice.routes");
const productRoutes = require("./routes/product.routes");

const authRoutes = require("./routes/auth.routes");

const loggerMiddleware = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/auth", authRoutes);

app.use("/api/farmers", farmerRoutes);
app.use("/api/parcels", parcelRoutes);
app.use("/api/harvests", harvestRoutes);

app.use("/api/markets", marketRoutes);
app.use("/api/market-prices", marketPriceRoutes);
app.use("/api/products", productRoutes);

app.use(errorHandler);

module.exports = app;