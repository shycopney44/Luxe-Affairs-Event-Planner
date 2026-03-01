const mongoose = require("mongoose");

const masterclassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    businessName: { type: String },
    goals: { type: String },
    country: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Masterclass", masterclassSchema);
