# 🧠 Mental Wellness Companion

> A full-stack personal wellness app for daily mood tracking, habit building, and self-improvement — built with React, Node.js & SQLite.

**Non-medical · Non-clinical · Fully private**

---

## 🌟 About the Project

Mental Wellness Companion is a modern self-care web application that empowers individuals to take charge of their daily mental and physical well-being. It provides a clean, private space to track moods, build positive habits, visualize personal trends, and discover wellness tips — all without any external database setup.

Whether you want to understand your emotional patterns over time, stay consistent with healthy routines, or simply reflect on your day, this app acts as your personal wellness journal and coach.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎭 **Mood Tracker** | Log daily mood (1–10) with emoji picker, slider, and private notes |
| 🔥 **Habit Tracker** | Create habits, mark them done daily, and track streak counters |
| 📊 **Analytics** | Interactive mood trend & habit completion charts (7d / 30d) |
| 💡 **Wellness Tips** | Browse & favourite a curated library of wellness advice |
| 🤖 **Smart Insights** | Rule-based personalized recommendations from your data |
| � **Notifications** | In-app wellness reminders and motivational nudges |
| �🛡️ **Admin Panel** | Manage users, view platform stats, and curate tip content |
| 🔐 **Auth System** | JWT-based login with role-based access (user / admin) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/mental-wellness-companion.git
cd mental-wellness-companion
```

### 2. Start the Backend
```bash
cd server
npm install
cp .env.example .env      # Edit .env with your own JWT secrets
npm run dev               # Runs on http://localhost:5000
```
> ✅ The SQLite database is created and seeded **automatically** on first run.

### 3. Start the Frontend
```bash
cd client
npm install
npm run dev               # Runs on http://localhost:5173
```

### 4. Open the App
Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🔑 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| 👑 Admin | `admin@wellness.com` | `admin123` |
| 👤 User | `john@example.com` | `user123` |

> Seeded automatically when the server starts for the first time.

---

## 🗂️ Project Structure

```
mental-wellness-companion/
├── client/                   # React + Vite frontend
│   └── src/
│       ├── pages/            # Mood, Habits, Analytics, Tips, Profile, Admin
│       ├── components/
│       │   └── Layout/       # Sidebar, Navbar, MainLayout
│       └── context/          # AuthContext (JWT handling)
│
├── server/                   # Node.js + Express backend
│   └── src/
│       ├── routes/           # API route definitions
│       ├── controllers/      # Business logic handlers
│       ├── middleware/        # JWT auth, error handling
│       ├── services/         # Recommendation engine
│       └── database/         # SQLite init, schema & seed
│
├── .gitignore
├── README.md
└── server/.env.example
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** — UI framework
- **Vite** — Fast dev server & bundler
- **Tailwind CSS v3** — Utility-first styling
- **Recharts** — Analytics charts
- **Lucide React** — Icon library
- **Axios** — HTTP client

### Backend
- **Node.js + Express** — REST API server
- **better-sqlite3** — Zero-config SQLite ORM
- **JWT (jsonwebtoken)** — Secure authentication
- **bcrypt** — Password hashing
- **Swagger UI** — Auto API documentation

### Database
- **SQLite** — File-based, no installation needed
- Auto-initialized with schema and demo seed data on first run

---

## 📡 API Documentation

Once the server is running, visit:
**[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

---

## 🔒 Privacy & Security

- Mood notes are **completely private** — never visible to admins
- Passwords are **hashed with bcrypt** before storage
- JWT tokens expire and use refresh token rotation
- `.env` file is excluded from version control

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

## 🙌 Acknowledgements

Built as a personal wellness companion project. Not a substitute for professional mental health support.
