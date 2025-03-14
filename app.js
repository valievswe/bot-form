const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const initializeBot = require("./config/bot");
const path = require("path");

dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.use((req, res, next) => {
  res.setHeader("ngrok-skip-browser-warning", "true");
  next();
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Ensure Express knows where to find the views folder
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

// Define a route to handle the root URL
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    message: "Welcome to the homepage!",
  });
});

// Define routes to handle communication with the frontend
app.get("/school", (req, res) => {
  console.log("Rendering maktab.ejs");
  res.render("maktab", {
    title: "Dreams School",
    message: "Maktab uchun ro'yxatdan o'tish",
  });
});

app.get("/president", (req, res) => {
  console.log("Rendering presidental.ejs");
  res.render("presidental", {
    title: "president maktabi",
    message: "President maktabiga tayyorlov!",
  });
});

app.get("/mental", (req, res) => {
  console.log("Rendering mental.ejs");
  res.render("mental", { title: "Mental", message: "Mental arifmetika" });
});

app.get("/dtm", (req, res) => {
  console.log("Rendering dtm.ejs");
  res.render("dtm", { title: "DTM", message: "dtm test register" });
});

// Initialize the bot
initializeBot();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
