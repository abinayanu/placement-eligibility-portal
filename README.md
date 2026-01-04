# Placement Eligibility Portal

A web application to manage student placement eligibility using role‑based access for students and placement officers.

## Features

- Student and professor (officer) registration and login  
- Role‑based dashboards for students and officers  
- View student academic details: CGPA, arrears, course, batch, roll number, etc.  
- Forgot password and reset functionality  
- Officer dashboard to view all registered students and their eligibility details  

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js (MVC structure)  
- **Database:** MongoDB with Mongoose  

## Project Structure

- `server.js` – Express app setup and route mounting  
- `config/db.js` – MongoDB connection  
- `models/user.model.js` – Mongoose model for students/officers  
- `controllers/` – Business logic (auth and student controllers)  
- `routes/` – API route definitions  
- `public/` – Frontend pages (HTML, CSS)  

## Core APIs

- `POST /api/register` – Register student  
- `POST /api/register-professor` – Register professor/officer  
- `POST /api/login` – Login and return user role + id  
- `POST /api/forgot-password` – Reset password by email  
- `GET /api/students` – Get all students (officer only)  
- `GET /api/students/:id` – Get single student details (by id)  

## How to Run

- Install dependencies with `npm install`.  
- Start the server with `node server.js`.  
- Open `http://localhost:3000/login.html` in the browser.
