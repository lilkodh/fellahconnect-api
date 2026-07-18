const express = require("express");
const router = express.Router();

const controller = require("../controllers/marketPrice.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  controller.createMarketPrice
);

router.get(
  "/",
  authMiddleware,
  controller.getAllMarketPrices
);

router.get(
  "/:id",
  authMiddleware,
  controller.getMarketPriceById
);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  controller.updateMarketPrice
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  controller.deleteMarketPrice
);

module.exports = router;