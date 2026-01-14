📝 Task Manager – Full Stack MERN App

A full-stack Task Manager application built using React, Node.js, Express, MongoDB, and JWT authentication.
Designed for internship evaluation with clean UI and full CRUD functionality.

🚀 Features

User Authentication (Register / Login)

JWT-based secure login

Add, delete, and complete tasks

Task status: Pending / Completed

Dashboard with task stats

Responsive & clean UI

MongoDB Atlas database

RESTful API backend

🛠️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

React Router

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcryptjs

📂 Project Structure
Task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/yourusername/task-manager.git
cd task-manager

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Open:

http://localhost:5173

🔐 Authentication Flow

User registers → password hashed

User logs in → JWT token generated

Token stored in localStorage

Token used for protected routes

📡 API Endpoints
Auth
Method	Route	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Tasks
Method	Route	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Add task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🌐 Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

🎯 Internship Objective

This project demonstrates:

Full stack development skills

REST API design

Authentication & security

UI/UX design

Deployment knowledge

👨‍💻 Author

Manhik
Internship Project – 2026
Task Manager Application

⭐ Future Improvements

Task categories

Due dates

Drag & drop tasks

Dark mode

Notifications

📜 License

This project is for educational and internship evaluation purposes.