const express = require("express");
const router = express.Router();

const controller = require("../controllers/marketPrice.controller");

router.post("/", controller.createMarketPrice);
router.get("/", controller.getAllMarketPrices);
router.get("/:id", controller.getMarketPriceById);
router.put("/:id", controller.updateMarketPrice);
router.delete("/:id", controller.deleteMarketPrice);

module.exports = router;