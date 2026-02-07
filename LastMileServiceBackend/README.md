# Service Marketplace API

Backend API for your service marketplace (brands ↔ local technicians ↔ consumers).  
This uses Node.js, Express, and in-memory fake data so you can plug it directly into your React frontend.

## Features

- List services: `GET /api/services`
- List & filter technicians: `GET /api/technicians?search=&category=&minRating=&maxPrice=&location=`
- Get single technician or service: `GET /api/technicians/:id`, `GET /api/services/:id`
- Create booking: `POST /api/bookings`
- Track booking: `GET /api/track/:trackingId`
- Simple forms:
  - Contact form: `POST /api/contact`
  - Technician onboarding: `POST /api/technicians/apply`
  - Brand partnership: `POST /api/brands/partner`

All data is currently generated with Faker at startup and stored in memory.  
You can later replace `src/data/fakeData.js` with real MongoDB / SQL models.

## Getting Started

```bash
npm install
npm run dev
```

The API will start on `http://localhost:4000` by default.

- Health check: `GET /api/health`
- Change port, frontend origin, or base path in `config/default.json`.
