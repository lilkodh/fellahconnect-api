const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const rbacMiddleware = require("../middlewares/rbac.middleware");
const validateRequiredFields = require("../middlewares/validation.middleware");

const router = express.Router();


router.post(
  "/register",
  validateRequiredFields([
    "fullName",
    "email",
    "password",
    "role",
  ]),
  authController.register
);


router.post(
  "/login",
  validateRequiredFields([
    "email",
    "password",
  ]),
  authController.login
);
router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      success: true,
      message: "Protected route works",
      user: req.user,
    });
  }
);


router.get(
  "/admin-test",
  authMiddleware,
  rbacMiddleware("ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message: "Admin access granted",
      user: req.user,
    });
  }
);

module.exports = router;
