const express = require("express");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

const employeeRoutes = require("./src/routes/employeeRoutes");

// Middleware
app.use(express.json());
// routes middleware
app.use("/api/employees", employeeRoutes); // sets the base path. Means all routes inside employeeRoutes will start with /api/employees. (Any request that starts with /api/employees should be handled by employeeRoutes)
// authentication routes
app.use("/api/auth", authRoutes);

//Test route
app.get("/", (req, res) => {
  res.send("API is running..");
});

module.exports = app;
