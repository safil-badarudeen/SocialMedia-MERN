const express = require("express");
const router = express.Router();
const {register} = require('../controllers/authController')

router.post(
  "/create/user",register);

module.exports = router;
