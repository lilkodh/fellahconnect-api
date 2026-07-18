const express = require("express");
const router = express.Router();

const saleOfferController = require("../controllers/saleOffer.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  saleOfferController.createSaleOffer
);

router.get(
  "/",
  authMiddleware,
  saleOfferController.getAllSaleOffers
);

router.get(
  "/:id",
  authMiddleware,
  saleOfferController.getSaleOfferById
);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  saleOfferController.updateSaleOffer
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  saleOfferController.deleteSaleOffer
);

module.exports = router;