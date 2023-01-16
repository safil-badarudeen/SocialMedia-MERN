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

const register = async (req, res) => {
  await check("email").isEmail().run(req);
  await check("username").isLength({ min: 3 }).run(req);
  await check("password").isLength({ min: 4 }).run(req);
  await check("mobilenumber").isLength({ min: 10 }).run(req);

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

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  user = await User.create({
    username,
    email,
    password: hashPassword,
    mobilenumber,
    profile,
  });

  const accessToken = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SEC
  );
  const OTP = generateOTP();
  const verificationToken = await VerificationToken.create({
    user: user._id,
    token: OTP,
  });

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
    html: `<h1>your OTP is ${OTP} </h1>`,
  });

  await user.save();

  const tokenUser = createTokenUser(user);

  res.status(200).json({ data: tokenUser, accessToken });
};

///////////////////////////////////////////

const emailVerification = async (req, res) => {
  const { user, OTP } = req.body;
  const mainUser = await User.findById(user);
  if (!mainUser) {
    return res.status(404).json({ msg: "user not found" });
  }

  if (mainUser.verified === true) {
    res.status(400).json({ msg: "user already verified" });
  }
  const token = await VerificationToken.find({ user: mainUser._id });
  console.log(token);
  if (!token) {
    return res.status(404).json({ msg: "token not found" });
  }

  const isMatch = await bcrypt.compareSync(OTP, token[0].token);
  if (!isMatch) {
    return res.status(400).json({ msg: "OTP is not valid" });
  }

  mainUser.verified = true;
  await VerificationToken.findByIdAndDelete(token._id);
  await mainUser.save();
  const accessToken = jwt.sign(
    {
      id: mainUser._id,
      username: mainUser.username,
    },
    process.env.JWT_SEC
  );

  const { password, ...others } = mainUser._doc;

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
    html: `<h1>your email is verified </h1>`,
  });

  res.status(200).json({ others, accessToken });
};

////////////////////////////////////////////////

const login = async (req, res) => {
  body("email").isEmail(), body("password").isLength({ min: 4 });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errorMsg: "Some error, check email,username or password " });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "user not found" });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(400).json("password Error");
  }

  //tokenUser from utils to remove password and complicated signs from response

  const tokenUser = createTokenUser(user);

  const accessToken = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SEC
  );

  res.status(200).json({ data: tokenUser, accessToken });
};

////////////////////////////////////

module.exports = { register, login , emailVerification};
