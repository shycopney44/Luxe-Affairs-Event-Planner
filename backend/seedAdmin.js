const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await Admin.findOne({ email: "admin@luxeaffairs.com" });
    if (existing) {
      console.log("Admin already exists:", existing.email);
      return process.exit(0);
    }

    const hashed = await bcrypt.hash("Admin123!", 10);

    const admin = await Admin.create({
      name: "Luxe Admin",
      email: "admin@luxeaffairs.com",
      password: hashed,
    });

    console.log("Admin created:", admin.email);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seedAdmin();
