const express = require("express");
const router = express.Router();

const {
  updatePassword,
  deleteAccount,
  userDetails,
  userSuggestions,
  followingUsers,
  usersFollow,
} = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyToken");


//update password
router.put("/updatepassword/:id", verifyToken, updatePassword);
//delete account
router.delete("/deleteaccount/:id", verifyToken, deleteAccount);
//user details
router.get("/userdetails/:id", verifyToken, userDetails);
//Usersuggestion
router.get("/usersuggestions/:id", userSuggestions);
//followingUsers
router.get("/followingusers/:id",  followingUsers);
//users follow you
router.get("/usersfollow/:id", usersFollow);

module.exports = router;