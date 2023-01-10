const express = require("express");
const router = express.Router();

const { updatePassword ,deleteAccount,userDetails,userSuggestions } = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyToken");

//Usersuggestion
router.get('/usersuggestions',verifyToken,userSuggestions)
//update password
router.put("/updatepassword/:id",verifyToken,updatePassword);
//delete account 
router.delete("/deleteaccount/:id",verifyToken,deleteAccount)
//user details
router.get('/userdetails/:id',verifyToken,userDetails)

module.exports = router;
