const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

// Middleware
// const logger = (req, res, next) => {
//   console.log("Middleware ran");
//   next();
// };

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

// Create a task
app.post("/api/tasks", async (req, res) => {
  console.log(req.body);
  res.send("Task created");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
