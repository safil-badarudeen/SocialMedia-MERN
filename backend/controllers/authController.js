require('dotenv').config()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {createTokenUser} = require('../utils/tokenUser')


const register= async(req, res) => {
        
        body("email").isEmail(),
        body("username").isLength({ min: 3 }),
        body("password").isLength({ min: 4 })
        body("mobilenumber").isLength({min:10})
        

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errorMsg: "Some error, check email,username or password " });
      }
  
      const { email, username, password, mobilenumber, profile } = req.body;
      
  
      let user = await User.findOne({ email, username });
      if (user) {
        res.status(200).json({ msg: "user already exists" });
      }
      if (user) {
        res.status(200).json({ msg: "username already in use" });
      }

      const  salt = bcrypt.genSaltSync(10);
      const  hashPassword = bcrypt.hashSync(password, salt);
  
      user = await User.create({
        username,
        email,
        password : hashPassword,
        mobilenumber,
        profile,
      });

        const accessToken = jwt.sign({ 
            id: user._id,
         username:user.username }, process.env.JWT_SEC);
  
      await user.save();
     res.status(200).json({ data: user , accessToken });
     
    }

const login = async(req,res)=>{
    body("email").isEmail(),
    body("password").isLength({ min: 4 })

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errorMsg: "Some error, check email,username or password " });
    }

    const { email , password } = req.body;

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({msg:"user not found"})
    }

    const comparePassword = await bcrypt.compare(password,user.password)

    if(!comparePassword){
      return res.status(400).json("password Error")
    }

    //tokenUser from utils to remove password and complicated signs from response 

    const tokenUser=createTokenUser(user)

    const accessToken = jwt.sign({ 
        id: user._id,
     username:user.username }, process.env.JWT_SEC);

    

     res.status(200).json({data: tokenUser, accessToken})


}


module.exports = {register,login}




  
  


