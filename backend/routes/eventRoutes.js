const express = require("express");
const {
  getAllEvents,
  getUserEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const { protect } = require("../middleware/auth");

const router = express.Router();

/**
 * ============================
 * 🔓 Public Routes
 * ============================
 */

// Get all events (public)
router.get("/", getAllEvents);


/**
 * ============================
 * 🔐 Private Routes (Auth Required)
 * ============================
 */

// Get events created by the logged‑in user
// IMPORTANT: must be ABOVE /:id
router.get("/mine", protect, getUserEvents);

// Create new event
router.post("/", protect, createEvent);

// Update event
router.put("/:id", protect, updateEvent);

// Delete event
router.delete("/:id", protect, deleteEvent);


/**
 * ============================
 * 🔓 Public Route (Dynamic)
 * ============================
 */

// Get single event by ID (public)
// MUST be last so it doesn't override /mine
router.get("/:id", getEventById);

module.exports = router;
