require("dotenv").config();
const User = require("../models/User");
const { body, check , validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




//update user password
const updatePassword = async (req,res) =>{

    await check("password").isLength({ min: 4 }).run(req);

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errorMsg: "Some error, check email,username or password " });
  }

  if (req.body.password){
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt)
    req.body.password = secPass;
    const update= await User.findByIdAndUpdate(req.params.id , {
        $set:req.body
    })
    await update.save();
    res.status(200).json(update)
  }
}

// delete user account
const deleteAccount = async(req,res)=>{
    user = req.params.id 
    currentUser= req.user.id
  if(user === currentUser){
    const account = await User.findByIdAndDelete(user)
    res.status(200).json("Account has been deleted successfully")
  }else{
    res.status(400).json("You dont have permission to delete this account")
  }
}

module.exports = {updatePassword , deleteAccount}