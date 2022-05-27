import React from "react";
import { Poster } from "../poster/Poster";
import "./MovieCard.css";

export const MovieCard = ({
  name,
  posterPath,
  title,
  vote_average,
  media_type,
  release_date,
}) => {
  return (
    <div className="movie-card">
      <span className="rate">{vote_average}</span>
      <Poster name={name} src={posterPath} />
      <h2 className="movie-title">{title ?? name}</h2>
      <div className="movie-footer">
        <h3 className="movie-type">{media_type}</h3>
        <h3 className="movie-date">{release_date ?? "2022 - 6 - 2"}</h3>
      </div>
    </div>
  );
};
