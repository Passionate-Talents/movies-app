import React from "react";
import { MovieCard } from "../../Componnets/movie-card/MovieCard";

export const Trending = () => {
  return (
    <div className="container">
      <h1 className="page-title">Trending Today</h1>
      <div className="cards-container">
        <MovieCard
          poster_path="/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
          name="Spider Man"
          vote_average="7"
          media_type="movie"
        />
        <MovieCard
          poster_path="/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
          name="Spider Man"
          vote_average="7"
          media_type="movie"
        />
        <MovieCard
          poster_path="/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
          name="Spider Man"
          vote_average="7"
          media_type="movie"
        />
        <MovieCard name="Spider Man" vote_average="7" media_type="movie" />
        <MovieCard
          poster_path="/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
          name="Spider Man"
          vote_average="7"
          media_type="movie"
        />
        <MovieCard name="Spider Man" vote_average="7" media_type="movie" />
        <MovieCard
          poster_path="/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
          name="Spider Man"
          vote_average="7.9"
          media_type="movie"
        />
      </div>
    </div>
  );
};
