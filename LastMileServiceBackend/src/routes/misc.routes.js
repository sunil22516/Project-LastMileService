const express = require("express");
const {
  submitContactForm,
  applyTechnician,
  applyBrandPartner,
} = require("../controllers/misc.controller");

const router = express.Router();

router.post("/contact", submitContactForm);
router.post("/technicians/apply", applyTechnician);
router.post("/brands/partner", applyBrandPartner);

module.exports = router;
