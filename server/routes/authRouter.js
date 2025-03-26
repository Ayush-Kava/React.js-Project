const express = require("express");
const { propertyModel } = require("../models/property-model");
const { userModel } = require("../models/user-model");
const router = express.Router();

router.post("/login",async(req,res)=>{
    const { email, password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        res.json({success: false, message: "User can't be exist! Please Register"});
    }
    else{
        if(user.password === password){
            res.json({success: true});
        }
        else{
            res.json({success: false,message: "Wrong Email or Password"});
        }
    }
});

router.post("/register", async(req,res)=>{
    const { firstname, email, password} = req.body;
    const newUser = await userModel({firstname: firstname, email: email, password: password});
    await newUser.save();
    res.json({success: true});
})

router.get("/propertys",async(req,res)=>{
    const data = await propertyModel.find();
    res.json(data);
})

module.exports = router