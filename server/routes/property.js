const express = require("express");
const router = express.Router();

const { propertyModel } = require("../models/property-model");

router.get("/data", async(req,res)=>{
    const allData = await propertyModel.find();
    res.json({data: allData});
})

module.exports = router