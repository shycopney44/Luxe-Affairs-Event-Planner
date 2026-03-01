const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

// CREATE inquiry
router.post("/", async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.json({ success: true, inquiry });
  } catch (err) {
    console.error("Inquiry Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all inquiries
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    console.error("Inquiry Fetch Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ⭐ DELETE inquiry by ID
router.delete("/:id", async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("Inquiry Delete Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
