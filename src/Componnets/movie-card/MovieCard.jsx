import React from "react";
import "./MovieCard.css";

const IMAGE_API = "https://image.tmdb.org/t/p/w300";

export const MovieCard = ({
  name,
  poster_path,
  title,
  vote_average,
  media_type,
  release_date,
}) => {
  return (
    <div className="movie-card">
      <span className="rate">{vote_average}</span>
      <img className="movie-image" src={IMAGE_API + poster_path} alt={name} />
      <h2 className="movie-title">{title ? title : name}</h2>
      <div className="movie-footer">
        <h3 className="movie-type">{media_type}</h3>
        <h3 className="movie-date">
          {release_date ? release_date : "2022 - 6 - 2"}
        </h3>
      </div>
    </div>
  );
};
