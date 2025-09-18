import React, { useRef, useEffect, useState } from "react";
import "./Player.css";

export default function Player({ song }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  if (!song) {
    return <p className="noSong">No song selected!</p>;
  }

  return (
    <div className="player">
      <div className={`albumArtWrapper ${isPlaying ? "pulse" : ""}`}>
        <img src={song.thumbnail} alt={song.title} className="albumArt" />
      </div>
      <h2 className="songTitle">{song.title}</h2>
      <audio ref={audioRef} src={song.src} controls autoPlay />
    </div>
  );
}
