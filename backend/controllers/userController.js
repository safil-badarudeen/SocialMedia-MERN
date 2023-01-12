require("dotenv").config();
const User = require("../models/User");
const { body, check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//update user password
const updatePassword = async (req, res) => {
  await check("password").isLength({ min: 4 }).run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errorMsg: "Some error, check email,username or password " });
  }
  if (req.params.id === req.user.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      req.body.password = secPass;
      const update = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      await update.save();
      res.status(200).json(update);
    }
  }
};

// delete user account
const deleteAccount = async (req, res) => {
  user = req.params.id;
  currentUser = req.user.id;
  if (user === currentUser) {
    const account = await User.findByIdAndDelete(user);
    res.status(200).json("Account has been deleted successfully");
  } else {
    res.status(400).json("You dont have permission to delete this account");
  }
};

//getUser details for post

const userDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).json("user not found");
  // console.log(user);
  const { email, password, following, followers, mobilenumber, ...other } =
    user._doc;
  res.status(200).json(other);
};

// get user for suggestion

const userSuggestions = async (req, res) => {
  try {
    const { id } = req.params;
    const allUser = await User.find();

    // console.log(allUser)
    const user = await User.findById(id);

    const followingUser = await Promise.all(user.following.map((item) => item));

    let userToFollow = await allUser.filter((user) => {
      return !followingUser.find((item) => {
        return user._id.toString() === item;
      });
    });

    let filterUsers = await Promise.all(
      userToFollow.map((user) => {
        const {
          email,
          mobilenumber,
          followers,
          following,
          password,
          ...others
        } = user._doc;
        return others;
      })
    );
    res.status(200).json(filterUsers);
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//get following users
const followingUsers = async (req, res) => {
  try {
   
    const user = await User.findById(req.params.id); //finding user
    const usersFollowYou = await Promise.all(
                                                    //in user.followers we will get object id's
      user.followers.map((id) => {                  //using object id we find out users
                                                    
         return User.findById(id);
      }) );

        const followersList = [];

        usersFollowYou.map((users) => {
          const {
            email,
            password,
            mobilenumber,
            following,
            followers,
            ...others
          } = users._doc;
          followersList.push(others);
        });

        res.status(200).json(followersList);
      
   
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//get users you Follow

const usersFollow = async (req, res) => {
  try {
   
    const user = await User.findById(req.params.id); 
    const usersYouFollow = await Promise.all(
                                                    
      user.followers.map((id) => {                  
                                                    
         return User.findById(id);
      }) );

        const followingList = [];

        usersYouFollow.map((users) => {
          const {
            email,
            password,
            mobilenumber,
            following,
            followers,
            ...others
          } = users._doc;
          followingList.push(others);
        });

        res.status(200).json(followingList);
      
   
  } catch (error) {
    res.status(500).json("internal server error");
  }
};



module.exports = {
  updatePassword,
  deleteAccount,
  userDetails,
  userSuggestions,
  followingUsers,
  usersFollow
  
};
