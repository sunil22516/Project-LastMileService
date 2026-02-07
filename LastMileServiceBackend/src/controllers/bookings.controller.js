const { bookings, buildTrackingTimeline } = require("../data/fakeData");
const { services, technicians } = require("../data/fakeData");
const { faker } = require("@faker-js/faker");
const moment = require("moment");

// POST /api/bookings
exports.createBooking = (req, res) => {
  const {
    customerName,
    phone,
    address,
    pincode,
    serviceId,
    technicianId,
    preferredSlot,
  } = req.body;

  if (!customerName || !phone || !address || !serviceId) {
    return res.status(400).json({
      error: "customerName, phone, address and serviceId are required",
    });
  }

  const id = faker.string.uuid();
  const trackingId = id.slice(0, 8).toUpperCase();
  const status = "Requested";

  const service = services.find((s) => s.id === Number(serviceId)) || null;
  const technician = technicians.find(
    (t) => t.id === Number(technicianId)
  ) || null;

  const booking = {
    id,
    trackingId,
    customerName,
    phone,
    address,
    pincode: pincode || null,
    serviceId: service ? service.id : null,
    technicianId: technician ? technician.id : null,
    preferredSlot: preferredSlot || null,
    status,
    createdAt: moment().toISOString(),
    timeline: buildTrackingTimeline(status),
  };

  bookings.set(id, booking);

  res.status(201).json({ booking });
};

// GET /api/bookings/:id
exports.getBookingById = (req, res) => {
  const { id } = req.params;
  const booking = bookings.get(id);
  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }
  res.json({ booking });
};

// GET /api/track/:trackingId
exports.trackBooking = (req, res) => {
  const { trackingId } = req.params;
  const booking = [...bookings.values()].find(
    (b) => b.trackingId === trackingId.toUpperCase()
  );

  if (!booking) {
    return res
      .status(404)
      .json({ error: "No service found for this tracking ID" });
  }

  res.json({
    trackingId: booking.trackingId,
    status: booking.status,
    timeline: booking.timeline,
  });
};
