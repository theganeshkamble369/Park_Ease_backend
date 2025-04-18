const mongoose = require("mongoose");

const ParkingSlotSchema = new mongoose.Schema({
  slotId: String,
  isAvailable: Boolean,
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ParkingSlot", ParkingSlotSchema);
