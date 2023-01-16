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
    to: mainUser.email,
    subject: "verify your email",
    html: `http://localhost:3000/reset/password?token=${randomTxt}&_id=${user._id}`,
  });

  return res.status(200).json("check your email to reset your password")
};
    
module.exports = { forgotPassword };
