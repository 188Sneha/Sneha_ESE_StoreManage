const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const complaintRoutes = require("./routes/complaintRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();


// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-complaint-frontend-zc7v.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());


// Database Connection
connectDB();


// Home Route
app.get("/", (req, res) => {
  res.send("AI Complaint Backend Running");
});


// Health Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running Successfully"
  });
});


// Complaint APIs
app.use("/api/complaints", complaintRoutes);

/*
POST   /api/complaints
GET    /api/complaints
PUT    /api/complaints/:id
*/


// Authentication APIs
app.use("/api/auth", authRoutes);

/*
POST   /api/auth/register
POST   /api/auth/login
*/


// AI APIs
app.use("/api/ai", aiRoutes);

/*
POST   /api/ai/analyze
*/


// Invalid Route Handling
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});