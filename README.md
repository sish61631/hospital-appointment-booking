# Hospital Appointment Booking Application

A full-stack web application for booking hospital appointments with a beautiful, unique UI, multi-colour themes, and comprehensive features.

## Features

- 🔐 User registration and login (Patient, Doctor, Admin)
- 👨‍⚕️ View available doctors with ratings and reviews
- 📅 Book appointments with doctors
- 💳 Secure payment integration with Stripe
- 📱 Mobile-responsive design (PWA ready)
- 🔔 Email notifications for appointments
- ⭐ Rating system for doctors
- 📊 Admin panel for hospital management
- 👨‍⚕️ Doctor dashboard for managing appointments
- 📅 Calendar view for appointments
- 🔔 In-app notifications
- 🎨 Multi-colour theme with glass morphism design
- 🔒 Secure authentication with JWT
- 📱 Mobile app version (responsive web)

## Tech Stack

### Frontend
- Next.js 16.2.2
- TypeScript
- Tailwind CSS 4
- Stripe Elements for payments
- React Calendar
- Axios for API calls

### Backend
- Node.js
- Express.js
- SQLite database
- JWT authentication
- bcryptjs for password hashing
- Nodemailer for emails
- Stripe for payments

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn
- Stripe account (for payments)

### Installation

1. Clone the repository
2. Install dependencies for both frontend and backend

#### Backend
```bash
cd backend
npm install
# Create .env file with:
# JWT_SECRET=your_secret
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_app_password
# STRIPE_SECRET_KEY=sk_test_your_key
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
# Create .env.local with:
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
npm run dev
```

### Database Setup
The application uses SQLite. The database file `hospital.db` will be created automatically on first run.

## Usage

1. Register as a patient, doctor, or admin
2. Browse doctors and their ratings
3. Book appointments with payment
4. Manage appointments in dashboards
5. Rate doctors after appointments
6. Admins can manage users, doctors, and appointments

## API Endpoints

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

### Appointments
- `GET /api/appointments/doctors`
- `POST /api/appointments/book`
- `GET /api/appointments/my`
- `PUT /api/appointments/:id/status`
- `POST /api/appointments/:id/rate`

### Admin
- `GET /api/admin/stats`
- `GET /api/admin/appointments`
- `PUT /api/admin/appointments/:id`
- `GET /api/admin/users`
- `POST /api/admin/doctors`
- `PUT /api/admin/doctors/:id`
- `DELETE /api/admin/doctors/:id`

### Payments
- `POST /api/payments/create-payment-intent`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create a Pull Request

## License

MIT License
npm run dev
```

3. The backend will run on http://localhost:5000
4. The frontend will run on http://localhost:3000

### Database
The application uses SQLite. The database file `hospital.db` will be created automatically when the backend starts.

Sample doctors are inserted on first run.

## Usage

1. Register a new account or login
2. Browse available doctors
3. Book an appointment by selecting a doctor, date, and time
4. View your appointments in the "My Appointments" section

### Default Test Accounts
- Admin: `admin@medicare.com` / `admin123`
- Doctor: `doctor@hospital.com` / `doctor123`

## API Endpoints

### Auth
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Appointments
- GET /api/appointments/doctors - Get all doctors
- POST /api/appointments/book - Book appointment (requires auth)
- GET /api/appointments/my - Get user's appointments (requires auth)

## Project Structure

```
├── backend/
│   ├── db.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── appointments.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── book/
│   │   │   └── appointments/
│   │   └── context/
│   │       └── AuthContext.tsx
│   └── package.json
└── README.md
```

## Contributing

This is a mini project for demonstration purposes.

## License

ISC