import React from "react";
import { Poster } from "../poster/Poster";
import "./MovieCard.css";

export const MovieCard = ({
  name,
  posterPath,
  title,
  voteAverage = 5,
  mediaType,
  releaseDate,
}) => {
  return (
    <div className="movie-card">
      <span
        className={`rate ${voteAverage < 6 ? "low-rating" : "high-rating"}`}
      >
        {voteAverage}
      </span>
      <Poster name={name} src={posterPath} />
      <h2 className="movie-title">{title ?? name}</h2>
      <div className="movie-footer">
        <h3 className="movie-type">{mediaType}</h3>
        <h3 className="movie-date">{releaseDate ?? "2022 - 6 - 2"}</h3>
      </div>
    </div>
  );
};
