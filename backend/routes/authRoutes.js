const express = require("express");
const router = express.Router();

// REGISTER ROUTE
router.post("/register", (req, res) => {

    res.status(201).json({
        success: true,
        message: "User Registered Successfully"
    });

});

// LOGIN ROUTE
router.post("/login", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Login Successful"
    });

});

module.exports = router;