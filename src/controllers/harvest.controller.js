const Harvest = require("../models/Harvest");
const Parcel = require("../models/Parcel");
const Product = require("../models/Product");

exports.createHarvest = async (req, res) => {
  try {
    const harvest = await Harvest.create(req.body);
    return res.status(201).json(harvest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllHarvests = async (req, res) => {
  try {
    const harvests = await Harvest.findAll();
    return res.status(200).json(harvests);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getHarvestById = async (req, res) => {
  try {
    const harvest = await Harvest.findByPk(req.params.id);

    if (!harvest) {
      return res.status(404).json({
        message: "Harvest not found",
      });
    }

    return res.status(200).json(harvest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


exports.updateHarvest = async (req, res) => {
  try {
    const harvest = await Harvest.findByPk(req.params.id);

    if (!harvest) {
      return res.status(404).json({
        message: "Harvest not found",
      });
    }

    await harvest.update(req.body);

    return res.status(200).json(harvest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


exports.deleteHarvest = async (req, res) => {
  try {
    const harvest = await Harvest.findByPk(req.params.id);

    if (!harvest) {
      return res.status(404).json({
        message: "Harvest not found",
      });
    }

    await harvest.destroy();

    return res.status(200).json({
      message: "Harvest deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getHarvestDetails = async (req, res) => {
  try {
    const harvest = await Harvest.findByPk(req.params.id, {
      include: [
        {
          model: Parcel,
          as: "parcel",
        },
        {
          model: Product,
          as: "product",
        },
      ],
    });

    if (!harvest) {
      return res.status(404).json({
        message: "Harvest not found",
      });
    }

    return res.status(200).json(harvest);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};