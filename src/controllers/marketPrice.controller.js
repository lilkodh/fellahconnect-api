const { MarketPrice } = require("../models");


exports.createMarketPrice = async (req, res) => {
  try {

    const { marketId, productId, price, date } = req.body;

    if (!marketId || !productId || !price || !date) {
      return res.status(400).json({
        message: "marketId, productId, price and date are required"
      });
    }

    const data = await MarketPrice.create({
      marketId,
      productId,
      price,
      date
    });

    return res.status(201).json(data);

  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
};


exports.getAllMarketPrices = async (req, res) => {
  try {

    const data = await MarketPrice.findAll();

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
};


exports.getMarketPriceById = async (req, res) => {
  try {

    const data = await MarketPrice.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({
        error: "Market price not found"
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
};


exports.updateMarketPrice = async (req, res) => {
  try {

    const data = await MarketPrice.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({
        error: "Market price not found"
      });
    }

    await data.update(req.body);

    return res.status(200).json(data);

  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
};


exports.deleteMarketPrice = async (req, res) => {
  try {

    const data = await MarketPrice.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({
        error: "Market price not found"
      });
    }

    await data.destroy();

    return res.status(200).json({
      message: "Market price deleted successfully"
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
};