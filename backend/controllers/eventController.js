const Event = require("../models/Event");

// ===============================
// 🔓 Public: Get all events
// ===============================
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .sort({ date: 1 })
      .populate("user", "name email");

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
};

// ===============================
// 🔐 Private: Get events for logged‑in user
// ===============================
const getUserEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id }).sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user events", error: error.message });
  }
};

// ===============================
// 🔓 Public: Get single event by ID
// ===============================
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("user", "name email");

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch event", error: error.message });
  }
};

// ===============================
// 🔐 Private: Create event
// ===============================
const createEvent = async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      user: req.user.id,
    });

    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: "Failed to create event", error: error.message });
  }
};

// ===============================
// 🔐 Private: Update event
// ===============================
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Ownership check
    if (event.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to update this event" });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: "Failed to update event", error: error.message });
  }
};

// ===============================
// 🔐 Private: Delete event
// ===============================
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Ownership check
    if (event.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this event" });
    }

    await event.deleteOne();

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete event", error: error.message });
  }
};

module.exports = {
  getAllEvents,
  getUserEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
