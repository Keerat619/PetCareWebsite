import mongoose from "mongoose";

const sitterSchema = new mongoose.Schema({
  name: String,
  city: String,
  price: Number,
  phone: String,
  experience: String,
  services: [String],
  description: String,
});

export default mongoose.model("Sitter", sitterSchema);