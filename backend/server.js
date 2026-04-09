import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Sitter from "./models/Sitter.js";
import Booking from "./models/booking.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DATABASE */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* TEST */
app.get("/", (req, res) => {
  res.send("API Working");
});

/* ADD SITTER */
app.post("/sitters", async (req, res) => {
  try {
    const sitter = new Sitter(req.body);
    await sitter.save();
    res.json(sitter);
  } catch (error) {
    res.status(500).json({ message: "Error adding sitter" });
  }
});

/* GET ALL SITTERS */
app.get("/sitters", async (req, res) => {
  try {
    const { city } = req.query;

    const sitters = await Sitter.find({
      city: { $regex: city || "", $options: "i" },
    });

    res.json(sitters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sitters" });
  }
});

/* GET SINGLE SITTER */
app.get("/sitters/:id", async (req, res) => {
  try {
    const sitter = await Sitter.findById(req.params.id);

    if (!sitter) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(sitter);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* DELETE SITTER */
app.delete("/sitters/:id", async (req, res) => {
  await Sitter.findByIdAndDelete(req.params.id);
  res.send("deleted");
});

/* CREATE BOOKING */
app.post("/bookings", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
});

/* GET BOOKINGS */
app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  const sitters = await Sitter.find();

  const result = bookings.map((b) => {
    const sitter = sitters.find(
      (s) => s._id.toString() === b.sitterId
    );

    return {
      ...b._doc,
      sitterName: sitter?.name,
      sitterCity: sitter?.city,
    };
  });

  res.json(result);
});

/* UPDATE BOOKING */
app.put("/bookings/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(booking);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});