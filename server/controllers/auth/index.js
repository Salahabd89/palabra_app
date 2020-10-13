const express = require("express");
const authService = require("../../services/auth");

var router = express.Router();

router.use(require("cookie-parser")());

router.get("/signup", authService.signup);
router.get("/signin", authService.signin);
router.get("/user", authService.getUser);

module.exports = router;
