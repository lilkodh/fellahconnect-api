const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");

router.post(
  "/",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  productController.createProduct,
);

router.get("/", authMiddleware, productController.getAllProducts);

router.get("/:id", authMiddleware, productController.getProductById);

router.put(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  productController.updateProduct,
);

router.delete(
  "/:id",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  productController.deleteProduct,
);

module.exports = router;
