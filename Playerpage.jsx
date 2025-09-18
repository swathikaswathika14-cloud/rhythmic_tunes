import React from "react";
import { useLocation } from "react-router-dom";
import Player from "./Player";

export default function PlayerPage() {
  const location = useLocation();
  const { song } = location.state || {};

  if (!song) return <p>No song selected!</p>;

  return <Player song={song} />;
}
