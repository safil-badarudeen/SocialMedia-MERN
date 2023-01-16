require("dotenv").config();
const User = require("../models/User");
const { body, check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createTokenUser } = require("../utils/tokenUser");
const { generateOTP } = require("../utils/otp");
const VerificationToken = require("../models/VerificationToken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const ResetToken = require("../models/ResetToken");

//forgot password
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "user not found" });
  }
  const token = await ResetToken.findOne({ user: user._id });
  if (token) {
    return res
      .status(400)
      .json({ msg: "Wait for One before requesting another token" });
  }

  const randomTxt = crypto.randomBytes(20).toString("hex");
  const resetToken = await ResetToken.create({
    user: user._id,
    token: randomTxt,
  });
  await resetToken.save();
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  transport.sendMail({
    from: "socialMedia@gmail.com",
    to: user.email,
    subject: "verify your email",
    html: `http://localhost:3000/reset/password?token=${randomTxt}&_id=${user._id}`,
  });

  return res.status(200).json("check your email to reset your password")
};



//reset password
const resetPassword = async (req,res) =>{
    const {token , _id}= req.query
    if(!token|| !_id){
        return res.status(400).json({msg:"request not valid"})
    }
    const user = await User.findOne({ _id:_id})
    if(!user){
        return res.status(400).json({msg:"user not found"})
    }
    const resetToken = await ResetToken.findOne({user:user._id})
    if(!resetToken){ 
        return res.status(400).json({msg:"reset token not  found"})
    }

    const isMatch = await bcrypt.compareSync(token , resetToken.token)
    if(!isMatch){
        return res.status(400).json({msg:"token is not valid"})
    }

    const {password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    user.password = hash
    await user.save()

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      });
    
      transport.sendMail({
        from: "socialMedia@gmail.com",
        to: user.email,
        subject: "password reset successfully",
        html: `Now you can login to your account with new password`,
      });

      res.status(200).json({msg:"password reset successfully "})

}
    
module.exports = { forgotPassword,resetPassword };
