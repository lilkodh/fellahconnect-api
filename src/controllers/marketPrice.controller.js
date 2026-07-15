const { MarketPrice } = require("../models");


exports.createMarketPrice = async (req, res) => {
  try {
    const data = await MarketPrice.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getAllMarketPrices = async (req, res) => {
  try {
    const data = await MarketPrice.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMarketPriceById = async (req, res) => {
  try {
    const data = await MarketPrice.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateMarketPrice = async (req, res) => {
  try {
    const data = await MarketPrice.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: "Not found" });

    await data.update(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteMarketPrice = async (req, res) => {
  try {
    const data = await MarketPrice.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: "Not found" });

    await data.destroy();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};