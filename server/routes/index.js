const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const propertyRoutes = require("./property")

router.use("/auth",authRouter);
router.use("/property",propertyRoutes);

module.exports = router;