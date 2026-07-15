const express = require("express");
const app = express();
const farmerRoutes = require("./routes/farmer.routes");
const parcelRoutes = require("./routes/parcel.routes");
const harvestRoutes = require("./routes/harvest.routes");
app.use(express.json());
app.use("/api/farmers", farmerRoutes);
app.use("/api/parcels", parcelRoutes);
app.use("/api/harvests", harvestRoutes);

module.exports = app;