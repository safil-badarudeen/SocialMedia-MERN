const express = require("express");
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post(
  "/create/user",
  body("email").isEmail(),
  body("username").isLength({ min: 3 }),
  body("password").isLength({ min: 4 }),
  async (req, res) => {
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
);

module.exports = router;
