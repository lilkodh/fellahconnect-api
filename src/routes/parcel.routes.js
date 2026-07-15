const express = require("express");
const router = express.Router();

const parcelController = require("../controllers/parcel.controller");

router.post("/", parcelController.createParcel);

router.get("/", parcelController.getAllParcels);

router.get("/:id", parcelController.getParcelById);

router.put("/:id", parcelController.updateParcel);

router.delete("/:id", parcelController.deleteParcel);

module.exports = router;