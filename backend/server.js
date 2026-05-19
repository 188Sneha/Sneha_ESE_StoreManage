const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const complaintRoutes = require("./routes/complaintRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/complaints", complaintRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});