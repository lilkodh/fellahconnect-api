const { Farmer, Parcel } = require("../models");

class GetFarmerParcelsTool {
  execute = async ({ farmerId }) => {
    const farmerFound = await Farmer.findByPk(farmerId);
    if (!farmerFound) {
      return {
        success: false,
        message: "farmer not found .",
      };
    }
    const parcels = await Parcel.findAll({
      where: {
        farmerId,
      },
    });
    if (parcels === 0) {
      return {
        success: false,
        message: "No parcels found for this farmer.",
      };
    }
    return {
      success: true,
      farmerId,
      parcels: parcels.map((parcel) => ({
        id: parcel.id,
        name: parcel.name,
        area: parcel.area,
        location: parcel.location,
      })),
    };
  };
}

module.exports = new GetFarmerParcelsTool();