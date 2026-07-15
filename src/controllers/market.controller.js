const { Market } = require("../models");


exports.createMarket = async (req, res) => {
  try {
    const market = await Market.create(req.body);
    res.status(201).json(market);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getAllMarkets = async (req, res) => {
  try {
    const markets = await Market.findAll();
    res.json(markets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMarketById = async (req, res) => {
  try {
    const market = await Market.findByPk(req.params.id);
    if (!market) return res.status(404).json({ error: "Market not found" });
    res.json(market);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateMarket = async (req, res) => {
  try {
    const market = await Market.findByPk(req.params.id);
    if (!market) return res.status(404).json({ error: "Market not found" });

    await market.update(req.body);
    res.json(market);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteMarket = async (req, res) => {
  try {
    const market = await Market.findByPk(req.params.id);
    if (!market) return res.status(404).json({ error: "Market not found" });

    await market.destroy();
    res.json({ message: "Market deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};