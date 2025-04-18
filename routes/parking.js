const express = require("express");
const router = express.Router();
const { updateSlot, getSlots } = require("../controllers/parkingController");

router.post("/update", updateSlot);
router.get("/", getSlots);

module.exports = router;
