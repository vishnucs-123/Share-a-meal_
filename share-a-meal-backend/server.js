require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Local)
mongoose.connect("mongodb://127.0.0.1:27017/shareameal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));

// Define Schemas
const DonationSchema = new mongoose.Schema({
  foodName: String,
  quantity: String,
  location: String,
  contact: String,
});
const NeedySchema = new mongoose.Schema({
  name: String,
  location: String,
  contact: String,
});

const Donation = mongoose.model("Donation", DonationSchema);
const Needy = mongoose.model("Needy", NeedySchema);

// API Routes
app.post("/donate-food", async (req, res) => {
  const newDonation = new Donation(req.body);
  await newDonation.save();
  res.status(201).json(newDonation);
});

app.get("/donations", async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

app.post("/find-needy", async (req, res) => {
  const newNeedy = new Needy(req.body);
  await newNeedy.save();
  res.status(201).json(newNeedy);
});

app.get("/needy-list", async (req, res) => {
  const needyList = await Needy.find();
  res.json(needyList);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
