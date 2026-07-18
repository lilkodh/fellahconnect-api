const express = require("express");
const router = express.Router();

const farmerController = require("../controllers/farmer.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  farmerController.createFarmer,
);

router.get("/", authMiddleware, farmerController.getAllFarmers);

router.get("/:id/parcels", authMiddleware, farmerController.getFarmerParcels);

router.get("/:id", authMiddleware, farmerController.getFarmerById);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  farmerController.updateFarmer,
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  farmerController.deleteFarmer,
);

module.exports = router;
