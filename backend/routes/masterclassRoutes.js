const express = require("express");
const router = express.Router();
const Masterclass = require("../models/Masterclass");
const auth = require("../middleware/authMiddleware"); // ⭐ added

// CREATE signup (public)
router.post("/", async (req, res) => {
  try {
    const signup = await Masterclass.create(req.body);
    res.json({ success: true, signup });
  } catch (err) {
    console.error("Masterclass Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all signups (admin only)
router.get("/", auth, async (req, res) => {
  try {
    const signups = await Masterclass.find().sort({ createdAt: -1 });
    res.json(signups);
  } catch (err) {
    console.error("Masterclass Fetch Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE signup (admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Masterclass.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("Masterclass Delete Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
