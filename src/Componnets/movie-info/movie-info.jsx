import React from "react";
import { AiFillYoutube } from "react-icons/ai";

import "./movie-info.css";
import { useMovieInfoApi } from "../../api/api-movie-info";
import { useMovieTrailerApi } from "../../api/api-movie-trailer";

export const MovieInfo = ({ id, mediaType }) => {
  const { data: movieInfo } = useMovieInfoApi(mediaType, id);
  const { data: movieTrailer } = useMovieTrailerApi(mediaType, id);

  const YOUTUBE_KEY = movieTrailer && movieTrailer[0]?.key;

  const POSTER__URL =
    (movieInfo?.poster_path &&
      "https://image.tmdb.org/t/p/w300" + movieInfo.poster_path) ||
    "https://www.movienewz.com/img/films/poster-holder.jpg";

  const handlePropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="movie-info" onClick={handlePropagation}>
      <div className="movie-info-wrapper">
        <img className="movie-poster" src={POSTER__URL} alt="movie-poster" />
        <div className="movie-info-featurs">
          <h3 className="movie-info-title">
            {movieInfo?.title ?? movieInfo?.name}
          </h3>
          <i className="movie-info-subtitle">{movieInfo?.tagline}</i>
          <p className="movie-info-description">{movieInfo?.overview}</p>
          <div className="movie-info-carousel"></div>
          <a
            href={`https://www.youtube.com/watch?v=${YOUTUBE_KEY}`}
            className="watch-trailer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillYoutube className="youtube-icon" />
            Watch the Trailler
          </a>
        </div>
      </div>
    </div>
  );
};
