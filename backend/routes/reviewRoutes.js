const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const auth = require("../middleware/authMiddleware"); // ⭐ added

// CREATE review (public)
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json({ success: true, review });
  } catch (err) {
    console.error("Review Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all reviews (admin only)
router.get("/", auth, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error("Review Fetch Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE review (admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("Review Delete Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
