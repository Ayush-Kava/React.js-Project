const express = require("express");
const {propertyModel} = require("../models/property-model");
const {userModel} = require("../models/user-model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {

  const {email, password} = req.body;
  const user = await userModel.findOne({email});

  if (!user) {

    res.json({success: false, message: "User can't be exist! Please Register"});

  } 
  else {

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {

      const token = jwt.sign({userId: user._id}, SECRET_KEY, {expiresIn: "1d"});
      console.log(token);
      res.cookie("token", token, {httpOnly: true,secure: false}).json({success: true});
      // res.json({success: true});

    } 
    else {

      res.json({success: false, message: "Wrong Email or Password"});
        
    }
  }
});

router.post("/register", async (req, res) => {
  const {firstname, email, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel({firstname: firstname, email: email, password: hashedPassword});
  await newUser.save();
  res.json({success: true});
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json({message: "Logged out successfully!"});
});

module.exports = router;
