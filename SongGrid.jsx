import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SongCard from "./SongCard";

// List all your real MP3 files in /public/assets
const songs = [
  { id: 1, title: "Aandipatti", src: "/assets/Aandipatti.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 2, title: "Apple Crumble", src: "/assets/Apple Crumble.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 3, title: "Ava Enna Enna", src: "/assets/Ava-Enna-Enna.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 4, title: "Breakup song", src: "/assets/Breakup.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 5, title: "Dhimu-Dhimu", src: "/assets/Dhimu-Dhimu.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 6, title: "Enna-Nadanthalum", src: "/assets/Enna-Nadanthalum.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 7, title: "Ennenna-Seidhom-Ingae", src: "/assets/Ennenna-Seidhom-Ingae.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 8, title: "Ezhutha Kadhaiyo", src: "/assets/Ezhutha Kadhaiyo.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 9, title: "Kadhal Valarthen", src: "/assets/Kadhal Valarthen.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 10, title: "Kadhal-Cricket", src: "/assets/Kadhal-Cricket.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 11, title: "Kadhal-Sadugudu", src: "/assets/Kadhal-Sadugudu.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 12, title: "Kanave-Kanave", src: "/assets/Kanave-Kanave.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 13, title: "Kangal Irandal", src: "/assets/Kangal Irandal.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 14, title: "Kanimaa", src: "/assets/Kanimaa", thumbnail: "/assets/logo.jpg" },
  { id: 15, title: "Kan-Irrandil", src: "/assets/Kan-Irrandil.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 16, title: "Kannadi Poove", src: "/assets/Kannadi Poove.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 17, title: "Kannala-Kannala", src: "/assets/Kannala-Kannala.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 18, title: "Kan-Peasum-Varthaigal", src: "/assets/Kan-Peasum-Varthaigal.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 19, title: "Konja Naal Poru Thalaivaa", src: "/assets/Konja Naal Poru Thalaivaa.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 20, title: "Nira", src: "/assets/Nira.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 21, title: "Oru-Devadhai", src: "/assets/Oru-Devadhai.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 22, title: "Pazhangalla-Vishamulla", src: "/assets/Pazhangalla-Vishamulla.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 23, title: "Poongkaatrilae", src: "/assets/Poongkaatrilae.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 24, title: "Snehidhane", src: "/assets/Snehidhane.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 25, title: "Thottu-Thottu", src: "/assets/Thottu-Thottu.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 26, title: "Unna-Nenachu", src: "/assets/Unna-Nenachu.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 27, title: "Uyire Uyire", src: "/assets/Uyire Uyire.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 28, title: "Uyire-Uyire piriyadhe", src: "/assets/Uyire-Uyire.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 29, title: "Vannangal Neeyanal", src: "/assets/Vannangal Neeyanal.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 30, title: "Venmathiye", src: "/assets/Venmathiye.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 31, title: "Yaaro-Yaaro", src: "/assets/Yaaro-Yaaro.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 32, title: "Yedho-Ondru-Ennai", src: "/assets/Yedho-Ondru-Ennai.mp3", thumbnail: "/assets/logo.jpg" },
  { id: 33, title: "Yendi Vittu Pona", src: "/assets/Yendi Vittu Pona.mp3", thumbnail: "/assets/logo.jpg" },

  // add all your songs here
];

export default function SongGrid({ favorites, setFavorites }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Filter songs based on search input
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-header">
        <h1 className="page-title">Browse Songs 🎵</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search songs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <button
            className="favorites-btn"
            onClick={() => navigate("/favorites")}
          >
            💜 Favorites
          </button>
        </div>
      </div>

      {/* Song Grid */}
      <div className="song-grid">
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            isFavorite={favorites.includes(song.id)}
            onPlay={() => navigate(`/player/${song.id}`, { state: { song } })}
            onToggleFavorite={() => {
              if (favorites.includes(song.id)) {
                setFavorites(favorites.filter((id) => id !== song.id));
              } else {
                setFavorites([...favorites, song.id]);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
