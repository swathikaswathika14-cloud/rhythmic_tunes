import React from "react";

const SongCard = ({
  song,
  isFavorite,
  onPlay,
  onToggleFavorite,
}) => {
  const size = 230;
  const strokeWidth = 8;
  const arcRadius = (size / 2) - (strokeWidth / 2) - 14;
  const cx = size / 2;
  const cy = size / 2;
  const arcPath = `
    M ${cx - arcRadius},${cy}
    A ${arcRadius},${arcRadius} 0 0,1 ${cx + arcRadius},${cy}
  `;

  return (
    <div className="song-card" onClick={onPlay}>
      {/* Arc Title */}
      <svg
        className="circle-text"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <defs>
          <path id={`arcPath-${song.id}`} d={arcPath} fill="none" />
        </defs>
        <text
          fill="#00ffcc"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="1px"
        >
          <textPath
            href={`#arcPath-${song.id}`}
            startOffset="50%"
            textAnchor="middle"
          >
            {song.title}
          </textPath>
        </text>
      </svg>
      {/* Song image */}
      <img src={song.thumbnail} alt={song.title} className="song-img" />
      {/* Favorite button BELOW image, inside circle */}
      <div className="fav-btn-wrapper">
        <button
          className="favorite-btn"
          onClick={e => {
            e.stopPropagation();
            onToggleFavorite && onToggleFavorite();
          }}
        >
          {isFavorite ? "💜" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default SongCard;
