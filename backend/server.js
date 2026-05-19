const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const complaintRoutes = require("./routes/complaintRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();


// ================= MIDDLEWARE =================

// CORS FIX
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

// BODY PARSER
app.use(express.json());


// ================= DATABASE CONNECTION =================

connectDB();


// ================= HOME ROUTE =================

app.get("/", (req, res) => {
  res.send("AI Complaint Backend Running");
});


// ================= HEALTH ROUTE =================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running Successfully"
  });
});


// ================= COMPLAINT APIs =================

app.use("/api/complaints", complaintRoutes);

/*
POST   /api/complaints
GET    /api/complaints
PUT    /api/complaints/:id
*/


// ================= AUTH APIs =================

app.use("/api/auth", authRoutes);

/*
POST   /api/auth/register
POST   /api/auth/login
*/


// ================= AI APIs =================

app.use("/api/ai", aiRoutes);

/*
POST   /api/ai/analyze
*/


// ================= INVALID ROUTE =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});


// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});