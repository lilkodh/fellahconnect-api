const express = require("express");

const app = express();

app.use(express.json());

const aiRoutes = require("./routes/ai.routes");

app.use("/api/ai", aiRoutes);

module.exports = app;