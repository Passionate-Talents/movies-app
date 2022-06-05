import React, { useEffect, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";

import "./movie-info.css";
import { useMovieInfo } from "../../hooks/use-movie-info";
import { useMovieTrailer } from "../../hooks/use-movie-trailer";
import { useActorsImages } from "../../hooks/use-actors-images";
import { Actor } from "../actor/actor";

export const MovieInfo = ({ id, mediaType }) => {
  const { data: movieInfo } = useMovieInfo(mediaType, id);
  const { data: movieTrailer } = useMovieTrailer(mediaType, id);
  const { data: actorsImages } = useActorsImages(mediaType, id);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  window.addEventListener("resize", handleResize);

  const YOUTUBE_KEY = movieTrailer && movieTrailer[0]?.key;

  const POSTER__URL =
    (movieInfo?.poster_path &&
      "https://image.tmdb.org/t/p/w300" + movieInfo.poster_path) ||
    "https://www.movienewz.com/img/films/poster-holder.jpg";

  const BACK_DROP =
    (movieInfo?.backdrop_path &&
      "https://image.tmdb.org/t/p/w300" + movieInfo.backdrop_path) ||
    "https://www.movienewz.com/img/films/poster-holder.jpg";

  const handlePropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="movie-info" onClick={handlePropagation}>
      <div className="movie-info-wrapper">
        <img
          className="movie-poster"
          src={windowWidth < 740 ? BACK_DROP : POSTER__URL}
          alt="movie-poster"
        />
        <div className="movie-info-featurs">
          <h3 className="movie-info-title">
            {movieInfo?.title ?? movieInfo?.name}
          </h3>
          <i className="movie-info-subtitle">{movieInfo?.tagline}</i>
          <p className="movie-info-description">{movieInfo?.overview}</p>
          <div className="movie-info-carousel">
            {actorsImages?.map((actor) => (
              <Actor key={actor.id} name={actor.name} src={actor.src} />
            ))}
          </div>
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
