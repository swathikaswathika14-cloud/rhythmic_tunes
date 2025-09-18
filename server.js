const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = []; // { username, password }
let sessions = {}; // { token: username }

// ====================
// Auth Routes (unchanged)
// ====================

// Register
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: "User already exists" });
  }
  users.push({ username, password });
  res.json({ message: "Registered successfully" });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  const token = Math.random().toString(36).substring(2);
  sessions[token] = username;
  res.json({ token });
});

// ====================
// Music / Songs Routes
// ====================

// Serve assets folder (MP3s, thumbnails)
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Endpoint to list all songs dynamically
app.get("/songs", (req, res) => {
  try {
    const files = fs.readdirSync(path.join(__dirname, "public/assets"))
      .filter(f => f.endsWith(".mp3"))
      .map((file, i) => ({
        id: i + 1,
        title: file.replace(".mp3", ""), // use filename as song title
        src: `/assets/${file}`,
        thumbnail: "/assets/default-thumb.jpg" // fallback thumbnail
      }));
    res.json(files);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load songs" });
  }
});

// ====================
// Start server
// ====================
app.listen(5000, () => console.log("Backend running on port 5000"));
