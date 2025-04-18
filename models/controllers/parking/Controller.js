const ParkingSlot = require("../models/ParkingSlot");

const updateSlot = async (req, res) => {
  const { slotId, isAvailable } = req.body;

  const slot = await ParkingSlot.findOneAndUpdate(
    { slotId },
    { isAvailable, updatedAt: Date.now() },
    { upsert: true, new: true }
  );

  const io = req.app.get("socketio");
  io.emit("slotUpdate", slot); // Broadcast to all clients

  res.status(200).json({ message: "Slot updated", slot });
};

const getSlots = async (req, res) => {
  const slots = await ParkingSlot.find();
  res.status(200).json(slots);
};

module.exports = { updateSlot, getSlots };
