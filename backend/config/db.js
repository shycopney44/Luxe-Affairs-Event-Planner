const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in your .env file");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Future‑proof options (Mongoose 7+ handles most automatically)
      autoIndex: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// Connection events
mongoose.connection.on("connected", () => {
  console.log("🔗 Mongoose connected");
});

mongoose.connection.on("error", (err) => {
  console.error(`❌ Mongoose error: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ Mongoose disconnected");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🔒 Mongoose connection closed due to app termination");
  process.exit(0);
});

module.exports = connectDB;
