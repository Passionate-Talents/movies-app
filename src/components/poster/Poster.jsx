import React from "react";

export const Poster = ({ src, name }) => {
  const POSTER__URL =
    (src && "https://image.tmdb.org/t/p/w300" + src) ||
    "https://www.movienewz.com/img/films/poster-holder.jpg";

  return <img className="movie-image" src={POSTER__URL} alt={name} />;
};
