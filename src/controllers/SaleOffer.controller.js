const { SaleOffer } = require("../models");

const createSaleOffer = async (req, res) => {
  try {
    const {
      harvestId,
      marketId,
      quantity,
      askingPrice,
      status,
    } = req.body;

    if (!harvestId || !marketId || !quantity || !askingPrice) {
      return res.status(400).json({
        message: "Harvest, market, quantity and asking price are required",
      });
    }

    const saleOffer = await SaleOffer.create({
      harvestId,
      marketId,
      quantity,
      askingPrice,
      status,
    });

    return res.status(201).json(saleOffer);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllSaleOffers = async (req, res) => {
  try {
    const saleOffers = await SaleOffer.findAll();

    return res.status(200).json(saleOffers);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSaleOfferById = async (req, res) => {
  try {
    const { id } = req.params;

    const saleOffer = await SaleOffer.findByPk(id);

    if (!saleOffer) {
      return res.status(404).json({
        message: "Sale offer not found",
      });
    }

    return res.status(200).json(saleOffer);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateSaleOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      harvestId,
      marketId,
      quantity,
      askingPrice,
      status,
    } = req.body;

    const saleOffer = await SaleOffer.findByPk(id);

    if (!saleOffer) {
      return res.status(404).json({
        message: "Sale offer not found",
      });
    }

    await saleOffer.update({
      harvestId,
      marketId,
      quantity,
      askingPrice,
      status,
    });

    return res.status(200).json(saleOffer);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteSaleOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const saleOffer = await SaleOffer.findByPk(id);

    if (!saleOffer) {
      return res.status(404).json({
        message: "Sale offer not found",
      });
    }

    await saleOffer.destroy();

    return res.status(200).json({
      message: "Sale offer deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createSaleOffer,
  getAllSaleOffers,
  getSaleOfferById,
  updateSaleOffer,
  deleteSaleOffer,
};