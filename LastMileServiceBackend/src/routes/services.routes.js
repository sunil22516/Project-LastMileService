const express = require("express");
const {
  getAllServices,
  getServiceById,
} = require("../controllers/services.controller");

const router = express.Router();

// base: /api/services
router.get("/services", getAllServices);
router.get("/services/:id", getServiceById);

module.exports = router;
