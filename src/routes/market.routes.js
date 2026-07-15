const express = require("express");
const router = express.Router();

const marketController = require("../controllers/market.controller");

router.post("/", marketController.createMarket);
router.get("/", marketController.getAllMarkets);
router.get("/:id", marketController.getMarketById);
router.put("/:id", marketController.updateMarket);
router.delete("/:id", marketController.deleteMarket);

module.exports = router;