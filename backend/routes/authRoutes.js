const express = require("express");
const router = express.Router();
const {register , login} = require('../controllers/authController')

router.post("/create/user",register);
router.post("/login",login);



module.exports = router;
