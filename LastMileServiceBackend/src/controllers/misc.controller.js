// POST /api/contact
exports.submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !message) {
    return res
      .status(400)
      .json({ error: "name and message are required" });
  }

  console.log("CONTACT_FORM", { name, email, message });
  res.status(201).json({ ok: true });
};

// POST /api/technicians/apply
exports.applyTechnician = (req, res) => {
  const { name, phone, category, experienceYears, location } = req.body;

  if (!name || !phone || !category) {
    return res
      .status(400)
      .json({ error: "name, phone and category are required" });
  }

  console.log("TECHNICIAN_APPLY", {
    name,
    phone,
    category,
    experienceYears,
    location,
  });

  res.status(201).json({ ok: true });
};

// POST /api/brands/partner
exports.applyBrandPartner = (req, res) => {
  const { brandName, contactPerson, email, phone, message } = req.body;

  if (!brandName || !contactPerson) {
    return res
      .status(400)
      .json({ error: "brandName and contactPerson are required" });
  }

  console.log("BRAND_PARTNERSHIP", {
    brandName,
    contactPerson,
    email,
    phone,
    message,
  });

  res.status(201).json({ ok: true });
};
