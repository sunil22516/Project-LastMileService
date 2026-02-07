const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const config = require("config");
const path = require("path");

const { API_PREFIX } = require("./src/utils/constants");

const servicesRoutes = require("./src/routes/services.routes");
const techniciansRoutes = require("./src/routes/technicians.routes");
const bookingsRoutes = require("./src/routes/bookings.routes");
const miscRoutes = require("./src/routes/misc.routes");

const app = express();

// ---------- MIDDLEWARE ----------
app.use(express.json());

app.use(helmet());

const frontendOrigin = config.get("frontendOrigin") || "*";
app.use(cors({ origin: frontendOrigin }));

app.use(morgan("dev"));

// ---------- ROUTES ----------
app.get("/", (req, res) => {
  res.json({
    name: "Service Marketplace API",
    status: "ok",
    docs: `${API_PREFIX}/health`
  });
});

const apiPrefix = config.get("apiPrefix") || API_PREFIX;

app.use(`${apiPrefix}`, servicesRoutes);
app.use(`${apiPrefix}`, techniciansRoutes);
app.use(`${apiPrefix}`, bookingsRoutes);
app.use(`${apiPrefix}`, miscRoutes);

// Health endpoint
app.get(`${apiPrefix}/health`, (req, res) => {
  res.json({ status: "healthy", time: new Date().toISOString() });
});

const PORT = process.env.PORT || config.get("port") || 4000;

app.listen(PORT, () => {
  console.log(`Service Marketplace API listening on port ${PORT}`);
});
