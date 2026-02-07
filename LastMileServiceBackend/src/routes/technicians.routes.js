const express = require("express");
const {
  getTechnicians,
  getTechnicianById,
} = require("../controllers/technicians.controller");

const router = express.Router();

// base: /api/technicians
router.get("/technicians", getTechnicians);
router.get("/technicians/:id", getTechnicianById);

module.exports = router;
