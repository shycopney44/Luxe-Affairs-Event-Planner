const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    date: String,
    guests: String,
    roomBlocks: String,
    eventType: String,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
