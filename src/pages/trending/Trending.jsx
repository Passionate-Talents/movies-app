import React from "react";
import { MovieCard } from "../../Componnets/movie-card/MovieCard";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchTrendingMovies } from "../../util/fetch-trending-movies";

export const Trending = () => {
  const {
    data: TrendingMovies,
    isLoading,
    isError,
  } = useFetchData("movies", () =>
    fetchTrendingMovies(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1a0525b93e71ae4a85e33829e5132266&page=1`
    )
  );

  return (
    <div className="container">
      <h1 className="page-title">Trending Today</h1>
      <div className="cards-container">
        {TrendingMovies?.results?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
