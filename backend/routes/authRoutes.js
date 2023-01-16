const express = require("express");
const router = express.Router();
const {
  register,
  login,
  emailVerification,
} = require("../controllers/authController");

router.post("/create/user", register);
router.post("/login", login);
router.post("/verify/user", emailVerification);

module.exports = router;
