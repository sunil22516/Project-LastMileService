const { services } = require("../data/fakeData");

// GET /api/services
exports.getAllServices = (req, res) => {
  res.json({ services });
};

// GET /api/services/:id
exports.getServiceById = (req, res) => {
  const id = Number(req.params.id);
  const service = services.find((s) => s.id === id);

  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }

  res.json({ service });
};
