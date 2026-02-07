const { faker } = require("@faker-js/faker");
const moment = require("moment");
const { DATE_FORMAT } = require("../utils/constants");

// In-memory collections (replace with real DB later)
const categories = [
  "AC Repair",
  "Refrigerator Service",
  "Washing Machine Service",
  "TV & Display Service",
  "RO / Water Purifier",
  "Small Appliance Repair",
];

const serviceAreas = [
  "Semi-urban",
  "Rural",
  "Tier-2 City",
  "Tier-3 Town",
];

function generateServices() {
  return categories.map((name, index) => ({
    id: index + 1,
    name,
    description: faker.lorem.sentence(),
    basePrice: faker.number.int({ min: 149, max: 599 }),
    avgDurationMinutes: faker.number.int({ min: 30, max: 120 }),
  }));
}

function generateTechnicians(services) {
  return Array.from({ length: 30 }).map((_, i) => {
    const service = faker.helpers.arrayElement(services);
    return {
      id: i + 1,
      name: faker.person.fullName(),
      headline: `Certified ${service.name} Technician`,
      serviceId: service.id,
      category: service.name,
      rating: Number(
        faker.number.float({ min: 3.6, max: 5, precision: 0.1 }).toFixed(1)
      ),
      reviewsCount: faker.number.int({ min: 5, max: 300 }),
      experienceYears: faker.number.int({ min: 1, max: 15 }),
      location: faker.location.city(),
      serviceArea: faker.helpers.arrayElement(serviceAreas),
      pricePerVisit: faker.number.int({ min: 199, max: 699 }),
      verified: faker.datatype.boolean(),
      languages: faker.helpers.arrayElements(
        ["Hindi", "English", "Local Language"],
        { min: 1, max: 3 }
      ),
      nextAvailableSlot: moment()
        .add(faker.number.int({ min: 0, max: 4 }), "days")
        .hour(11)
        .minute(0)
        .format(DATE_FORMAT),
    };
  });
}

function buildTrackingTimeline(status) {
  const now = moment();
  const base = [
    {
      status: "Requested",
      timestamp: now.clone().subtract(2, "hours").toISOString(),
    },
    {
      status: "Confirmed",
      timestamp: now.clone().subtract(90, "minutes").toISOString(),
    },
  ];

  if (status === "Ongoing" || status === "Completed") {
    base.push({
      status: "Technician On The Way",
      timestamp: now.clone().subtract(45, "minutes").toISOString(),
    });
  }

  if (status === "Completed") {
    base.push({
      status: "Job Completed",
      timestamp: now.clone().subtract(5, "minutes").toISOString(),
    });
  }

  return base;
}

// Initialize collections once at startup
const services = generateServices();
const technicians = generateTechnicians(services);
const bookings = new Map(); // bookingId -> booking

module.exports = {
  categories,
  serviceAreas,
  services,
  technicians,
  bookings,
  buildTrackingTimeline,
};
