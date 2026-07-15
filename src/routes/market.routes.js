const express = require("express");
const router = express.Router();

const marketController = require("../controllers/market.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  marketController.createMarket
);

router.get(
  "/",
  authMiddleware,
  marketController.getAllMarkets
);

router.get(
  "/:id",
  authMiddleware,
  marketController.getMarketById
);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  marketController.updateMarket
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  marketController.deleteMarket
);

module.exports = router;