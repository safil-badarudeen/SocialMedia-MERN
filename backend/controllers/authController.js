const User = require('../models/User')
const { body, validationResult } = require('express-validator');


const register= async(req, res) => {
        
        body("email").isEmail(),
        body("username").isLength({ min: 3 }),
        body("password").isLength({ min: 4 })
        

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errorMsg: "Some error, check email,username or password " });
      }
  
      const { email, username, password, mobilenumber, profile } = req.body;
      console.log(email , username, password , mobilenumber)
  
      let user = await User.findOne({ email, username });
      if (user) {
        res.status(200).json({ msg: "user already exists" });
      }
      if (user) {
        res.status(200).json({ msg: "username already in use" });
      }
  
      user = await User.create({
        username,
        email,
        password,
        mobilenumber,
        profile,
      });
  
      await user.save();
     res.status(200).json({ data: user });
     
    }


module.exports = {register}




  
  


