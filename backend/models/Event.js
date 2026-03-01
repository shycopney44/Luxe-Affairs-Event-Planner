const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: [true, "Event title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"]
    },

    date: { 
      type: Date, 
      required: [true, "Event date is required"] 
    },

    time: {
      type: String,
      trim: true,
      validate: {
        validator: v =>
          /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v),
        message: props => `${props.value} is not a valid time format (HH:MM)`
      }
    },

    location: { 
      type: String, 
      default: "TBD",
      trim: true 
    },

    notes: { 
      type: String, 
      default: "",
      trim: true 
    },

    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
      required: true 
    },

    // Optional future-proof fields
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled"
    },

    category: {
      type: String,
      enum: ["wedding", "birthday", "corporate", "social", "other"],
      default: "other"
    }
  },
  { 
    timestamps: true, 
    versionKey: false 
  }
);

// 🔍 Indexes for performance
eventSchema.index({ user: 1, date: 1 });
eventSchema.index({ date: 1 });
eventSchema.index({ category: 1 });

// 🧠 Virtual: Combine date + time into a full JS Date object
eventSchema.virtual("dateTime").get(function () {
  if (!this.date || !this.time) return null;
  return new Date(`${this.date.toISOString().split("T")[0]}T${this.time}:00`);
});

module.exports = mongoose.model("Event", eventSchema);
