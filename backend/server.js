// backend/server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("./config/db");

// Existing routes
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const masterclassRoutes = require("./routes/masterclassRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");

// ⭐ NEW — Auth routes
const authRoutes = require("./routes/authRoutes");

const app = express();

/**
 * ============================
 * 🌐 Global Middleware
 * ============================
 */
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/**
 * ============================
 * 🔗 Database Connection
 * ============================
 */
connectDB();

/**
 * ============================
 * 🚦 Routes
 * ============================
 */
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

// ⭐ NEW — Auth route
app.use("/api/auth", authRoutes);

// Existing routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/masterclass", masterclassRoutes);
app.use("/api/inquiries", inquiryRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).send("✅ API is running...");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend connected" });
});

/**
 * ============================
 * ❗ Global Error Handler
 * ============================
 */
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

/**
 * ============================
 * 🚀 Start Server
 * ============================
 */
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

/**
 * ============================
 * 🔒 Graceful Shutdown
 * ============================
 */
const shutdown = async (signal) => {
  console.log(`\n⚠️ Received ${signal}, shutting down gracefully...`);

  await mongoose.connection.close();
  console.log("🔒 MongoDB connection closed");

  server.close(() => {
    console.log("🛑 Server closed");
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
