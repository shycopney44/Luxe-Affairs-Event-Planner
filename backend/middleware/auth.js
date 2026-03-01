const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const protect = async (req, res, next) => {
  try {
    let token;

    // 1. Check Authorization header
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 2. Check cookies (optional)
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    // 3. No token found
    if (!token) {
      return res.status(401).json({ message: "Not authorized — token missing" });
    }

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // 5. Attach user to request
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    // Token expired
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired — please log in again" });
    }

    // Invalid token
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Other errors
    return res.status(500).json({ message: "Authentication error", error: error.message });
  }
};

module.exports = { protect };
