<<<<<<< HEAD
# Hospital App

Express + EJS hospital app with appointments, doctors, blog, and auth.

## Setup

1. Install dependencies:
```bash
npm install
```
2. Create a `.env` file based on `.env.example`.
3. Start the app:
```bash
npm run dev
```

## Environment Variables
- PORT — server port (e.g. 3000)
- MONGO_URI — MongoDB connection string
- SESSION_SECRET — session secret for cookies

## Scripts
- npm start — run in production
- npm run dev — run with nodemon

## Features
- Appointment booking form with success/error feedback
- Admin appointments listing page
- Doctors pages and department browsing
- Blog pages
- User auth (login/register), session-based

## Project Structure
```
.
├─ app.js                 # Express app entry
├─ config/db.js           # Mongo connection
├─ models/                # Mongoose models
├─ routes/                # Express routes
├─ views/                 # EJS templates
├─ public/                # Static assets (CSS, images)
└─ package.json
```

## Key Routes
- GET `/` → login page
- GET `/home` → home dashboard
- GET `/appointments` → book appointment (user)
- POST `/appointments` → submit appointment
- GET `/admin/appointments` → list all appointments (admin)
- GET `/doctors` → doctors page
- GET `/contact` → contact page

## Development Tips
- Ensure MongoDB is running and `MONGO_URI` is correct.
- Use `npm run dev` for auto-restart during development.
- Do not commit `.env` (already ignored by `.gitignore`).

## Deployment
- Set environment variables on the host: `PORT`, `MONGO_URI`, `SESSION_SECRET`.
- Use `npm start` to run with Node.
- Behind a process manager (pm2/systemd) or a PaaS (Render/Heroku/Vercel Node server) is recommended.

## License
MIT
=======
# SmartCare-Hospital-Management-System
>>>>>>> 5e3e565774fa526cfc55f48e8d99b46800ba903f
