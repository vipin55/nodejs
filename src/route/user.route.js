const express = require("express");
const UserController = require("../controller/user.controller");
const router = express.Router();
router.post("/signup", UserController.SignUp);
router.post("/signin", UserController.Signin);

module.exports = router;
