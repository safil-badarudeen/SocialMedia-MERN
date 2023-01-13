const express = require("express");
const router = express.Router();

const {
  updatePassword,
  deleteAccount,
  userDetails,
  userSuggestions,
  followingUsers,
  usersFollowYou,
} = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyToken");


//update password
router.put("/updatepassword/:id", verifyToken, updatePassword);
//delete account
router.delete("/deleteaccount/:id", verifyToken, deleteAccount);
//user details
router.get("/userdetails/:id",  userDetails);
//Usersuggestion
router.get("/usersuggestions/:id", userSuggestions);
//followingUsers
router.get("/followingusers/:id",  followingUsers);
//users follow you
router.get("/usersfollow/:id", usersFollowYou);

module.exports = router;