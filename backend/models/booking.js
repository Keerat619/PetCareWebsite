import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  date: String,
  address: String,
  petType: String,
  sitterId: String,
  status: {
    type: String,
    default: "pending"
  }
});

export default mongoose.model("Booking", bookingSchema);