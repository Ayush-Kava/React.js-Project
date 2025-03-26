const express = require("express");
const router = express.Router();

const { propertyModel } = require("../models/property-model");

router.get("/data", async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = 10; // Max 10 properties per page
    const skip = (page - 1) * limit;

    const total = await propertyModel.countDocuments(); // Get total count
    const allData = await propertyModel.find().skip(skip).limit(limit);

    res.json({
        data: allData,
        totalPages: Math.ceil(total / limit),
        currentPage: page
    });
});

router.get("/:id", async (req, res) => {
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