const express = require("express");
const router = express.Router();

const { updatePassword } = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyToken");


//update password
router.put("/updatepassword/:id",verifyToken,updatePassword);




module.exports = router;
