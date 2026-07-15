const Parcel = require("../models/Parcel");

exports.createParcel = async (req, res) => {
  try {
    const parcel = await Parcel.create(req.body);
    return res.status(201).json(parcel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.findAll();
    return res.status(200).json(parcels);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getParcelById = async (req, res) => {
  try {
    const parcel = await Parcel.findByPk(req.params.id);

    if (!parcel) {
      return res.status(404).json({
        message: "Parcel not found",
      });
    }

    return res.status(200).json(parcel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findByPk(req.params.id);

    if (!parcel) {
      return res.status(404).json({
        message: "Parcel not found",
      });
    }

    await parcel.update(req.body);

    return res.status(200).json(parcel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findByPk(req.params.id);

    if (!parcel) {
      return res.status(404).json({
        message: "Parcel not found",
      });
    }

    await parcel.destroy();

    return res.status(200).json({
      message: "Parcel deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};