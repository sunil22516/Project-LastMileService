const { technicians } = require("../data/fakeData");

// GET /api/technicians
// Query params: search, category, minRating, maxPrice, location
exports.getTechnicians = (req, res) => {
  const { search, category, minRating, maxPrice, location } = req.query;

  let result = [...technicians];

  if (search) {
    const term = search.toLowerCase();
    result = result.filter(
      (t) =>
        t.name.toLowerCase().includes(term) ||
        t.category.toLowerCase().includes(term) ||
        t.headline.toLowerCase().includes(term)
    );
  }

  if (category) {
    result = result.filter((t) => t.category === category);
  }

  if (minRating) {
    result = result.filter((t) => t.rating >= Number(minRating));
  }

  if (maxPrice) {
    result = result.filter((t) => t.pricePerVisit <= Number(maxPrice));
  }

  if (location) {
    const term = location.toLowerCase();
    result = result.filter((t) =>
      t.location.toLowerCase().includes(term)
    );
  }

  res.json({ technicians: result });
};

// GET /api/technicians/:id
exports.getTechnicianById = (req, res) => {
  const id = Number(req.params.id);
  const tech = technicians.find((t) => t.id === id);

  if (!tech) {
    return res.status(404).json({ error: "Technician not found" });
  }

  res.json({ technician: tech });
};
