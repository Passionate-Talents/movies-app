import React from "react";

export const Poster = ({ poster_path, name }) => {
  const POSTER__URL =
    (poster_path && "https://image.tmdb.org/t/p/w300" + poster_path) ||
    "https://www.movienewz.com/img/films/poster-holder.jpg";

  return <img className="movie-image" src={POSTER__URL} alt={name} />;
};
