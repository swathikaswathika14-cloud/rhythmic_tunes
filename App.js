import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import SongGrid from "./components/SongGrid";
import Player from "./components/Player";
import Favorites from "./components/Favorites";
import "./styles.css";
import PlayerPage from "./components/Playerpage";

export default function App() {
  const [token, setToken] = useState(null);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<SongGrid favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
    </Router>
  );
}
