require("dotenv").config();


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/upload", require("./routes/upload"));
app.use("/api/query", require("./routes/query"));

// Health check route
app.get("/", (req, res) => {
res.json({ message: "OpsMind AI Backend Running" });
});

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, "127.0.0.1", () => {
console.log(`OpsMind Backend running on http://127.0.0.1:${PORT}`);
});
