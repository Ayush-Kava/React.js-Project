const express = require("express");
const router = express.Router();
const authenticateUser  = require("../middlewares/authMiddleware");
const { propertyModel } = require("../models/property-model");

router.get("/data",authenticateUser, async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = 10; // Max 10 properties per page
    const maxPrice = req.query.search ? req.query.search : Infinity;
    const filter = maxPrice !== Infinity ? { price: { $lte: maxPrice } } : {};

    const skip = (page - 1) * limit;

    const total = await propertyModel.countDocuments(filter); // Get total count
    const data = await propertyModel.find(filter).skip(skip).limit(limit);
    if(maxPrice != Infinity){
        data.sort((a, b) =>  b.price - a.price )
    }
    res.json({
        data: data,
        totalPages: Math.ceil(total / limit),
        currentPage: page
    });
});

router.get("/:id",authenticateUser , async (req, res) => {
    try {
        const propertyData = await propertyModel.findById(req.params.id);
        if (!propertyData) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.json({ prop: propertyData }); // Make sure `price` exists in response
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});


module.exports = router