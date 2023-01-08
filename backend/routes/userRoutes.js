const express = require("express");
const router = express.Router();

const { updatePassword ,deleteAccount } = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyToken");


//update password
router.put("/updatepassword/:id",verifyToken,updatePassword);
//delete account 
router.delete("/deleteaccount/:id",verifyToken,deleteAccount)



module.exports = router;
