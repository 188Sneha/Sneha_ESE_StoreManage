const express = require("express");

const {
  signup,
  login
} = require("../controllers/authController");

const router = express.Router();

// REGISTER
router.post("/register", signup);

// LOGIN
router.post("/login", login);

module.exports = router;