const express = require("express");
const router = express.Router();

const harvestController = require("../controllers/harvest.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  harvestController.createHarvest
);

router.get(
  "/",
  authMiddleware,
  harvestController.getAllHarvests
);

router.get(
  "/:id/details",
  authMiddleware,
  harvestController.getHarvestDetails
);

router.get(
  "/:id",
  authMiddleware,
  harvestController.getHarvestById
);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  harvestController.updateHarvest
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  harvestController.deleteHarvest
);

module.exports = router;