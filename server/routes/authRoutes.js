const express = require("express");
const router = express.Router();

router.get("/api",(req,res)=>{
    res.json({message: "Hey There!!"});
})

module.exports = router