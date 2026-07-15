const express = require("express");
const router = express.Router();

const parcelController = require("../controllers/parcel.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  parcelController.createParcel
);

router.get(
  "/",
  authMiddleware,
  parcelController.getAllParcels
);

router.get(
  "/:id",
  authMiddleware,
  parcelController.getParcelById
);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  parcelController.updateParcel
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  parcelController.deleteParcel
);

module.exports = router;