const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("FirstNAme must contain at least 3 charr"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 char long"),
  ],
  userController.registerUser
);

module.exports = router;
