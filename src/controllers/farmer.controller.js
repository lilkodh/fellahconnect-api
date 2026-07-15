const Farmer = require("../models/Farmer");
const Parcel = require("../models/Parcel");
exports.createFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.create(req.body);
    return res.status(201).json(farmer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.findAll();
    return res.status(200).json(farmers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getFarmerById = async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id);

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    return res.status(200).json(farmer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id);

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    await farmer.update(req.body);

    return res.status(200).json(farmer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id);

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    await farmer.destroy();

    return res.status(200).json({
      message: "Farmer deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getFarmerParcels = async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id, {
      include: [
        {
          model: Parcel,
          as: "parcels",
        },
      ],
    });

    if (!farmer) {
      return res.status(404).json({
        message: "Farmer not found",
      });
    }

    return res.status(200).json(farmer);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};