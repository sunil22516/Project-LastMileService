const express = require("express");
const {
  createBooking,
  getBookingById,
  trackBooking,
} = require("../controllers/bookings.controller");

const router = express.Router();

// base: /api/bookings
router.post("/bookings", createBooking);
router.get("/bookings/:id", getBookingById);
router.get("/track/:trackingId", trackBooking);

module.exports = router;
