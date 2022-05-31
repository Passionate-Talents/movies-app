import React, { useState } from "react";

import "./MovieCard.css";
import { Poster } from "../poster/Poster";
import { Modal } from "../../Componnets/modal/modal";
import { MovieInfo } from "../../Componnets/movie-info/movie-info";

export const MovieCard = ({
  name,
  posterPath,
  title,
  voteAverage,
  mediaType,
  releaseDate,
  id,
}) => {
  const [isMovieInfoOpen, setIsMovieInfoOpen] = useState(false);

  const handleOpenMovieInfo = () => {
    setIsMovieInfoOpen(true);
  };

  const handleCloseMovieInfo = (event) => {
    event.stopPropagation();
    setIsMovieInfoOpen(false);
  };

  return (
    <div onClick={handleOpenMovieInfo} className="movie-card">
      {isMovieInfoOpen && (
        <Modal handleCloseMovieInfo={handleCloseMovieInfo}>
          <MovieInfo id={id} mediaType={mediaType} />
        </Modal>
      )}
      {!!voteAverage && (
        <span
          className={`rate ${voteAverage < 6 ? "low-rating" : "high-rating"}`}
        >
          {voteAverage}
        </span>
      )}
      <Poster name={name} src={posterPath} />
      <h2 className="movie-title">{title ?? name}</h2>
      <div className="movie-footer">
        <h3 className="movie-type">{mediaType}</h3>
        <h3 className="movie-date">{releaseDate ?? "2022 - 6 - 2"}</h3>
      </div>
    </div>
  );
};
