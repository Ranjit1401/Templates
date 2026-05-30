const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

console.log("Controller:", controller);

router.post("/send-otp", controller.sendOTP);
router.post("/register", controller.registerUser);

module.exports = router;