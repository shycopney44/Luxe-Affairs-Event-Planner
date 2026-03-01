const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/authMiddleware"); // ⭐ added

/**
 * ============================
 * 🔓 Public Routes
 * ============================
 * (None — users are admin-only in your dashboard)
 */

/**
 * ============================
 * 🔐 Admin Protected Routes
 * ============================
 */

// GET all users (admin only)
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error("User Fetch Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE user (admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("User Delete Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
