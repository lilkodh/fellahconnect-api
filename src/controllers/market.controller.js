const { Market } = require("../models");


const createMarket = async (req, res) => {
  try {
    const { name, city, region } = req.body;

    if (!name || !city || !region) {
      return res.status(400).json({
        message: "Name, city and region are required",
      });
    }

    const market = await Market.create({
      name,
      city,
      region,
    });

    return res.status(201).json(market);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


const getAllMarkets = async (req, res) => {
  try {
    const markets = await Market.findAll();

    return res.status(200).json(markets);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


const getMarketById = async (req, res) => {
  try {
    const { id } = req.params;

    const market = await Market.findByPk(id);

    if (!market) {
      return res.status(404).json({
        message: "Market not found",
      });
    }

    return res.status(200).json(market);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


const updateMarket = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, region } = req.body;

    const market = await Market.findByPk(id);

    if (!market) {
      return res.status(404).json({
        message: "Market not found",
      });
    }

    await market.update({
      name,
      city,
      region,
    });

    return res.status(200).json(market);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMarket = async (req, res) => {
  try {
    const { id } = req.params;

    const market = await Market.findByPk(id);

    if (!market) {
      return res.status(404).json({
        message: "Market not found",
      });
    }

    await market.destroy();

    return res.status(200).json({
      message: "Market deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMarket,
  getAllMarkets,
  getMarketById,
  updateMarket,
  deleteMarket,
};