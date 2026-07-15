const express = require("express");
const router = express.Router();

const harvestController = require("../controllers/harvest.controller");

router.post("/", harvestController.createHarvest);

router.get("/", harvestController.getAllHarvests);

router.get("/:id/details", harvestController.getHarvestDetails);

router.get("/:id", harvestController.getHarvestById);

router.put("/:id", harvestController.updateHarvest);

router.delete("/:id", harvestController.deleteHarvest);

module.exports = router;