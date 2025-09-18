import React from "react";

export default function Favorites({ favorites, setCurrentSong }) {
  return (
    <div className="favorites">
      <h2>💜 Favorites</h2>
      {favorites.map(song => (
        <div key={song.id} className="fav-item" onClick={() => setCurrentSong(song)}>
          <div className="cover">🎵</div>
          <span>{song.title}</span>
        </div>
      ))}
    </div>
  );
}
