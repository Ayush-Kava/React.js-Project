const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateUser = (req, res, next) => {
    let token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized. Please log in." });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT Verification Failed:", error.message); // See exact issue
        return res.status(403).json({ success: false, message: "Invalid token." });
    }
};

module.exports = authenticateUser;