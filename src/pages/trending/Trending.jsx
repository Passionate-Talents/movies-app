import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { MovieCard } from "../../Componnets/movie-card/MovieCard";
import { fetchTrendingMovies } from "../../util/fetch-trending-movies";
import { Pagination } from "../../Componnets/pagination/pagination";

export const Trending = () => {
  const [currentPage, setPage] = useState(1);

  const {
    data: trendingMovies,
    isLoading,
    isError,
  } = useQuery(["trending-movies", currentPage], fetchTrendingMovies, {
    keepPreviousData: true,
  });

  const countPage = trendingMovies?.total_pages;

  const handlePageClick = (page) => {
    setPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <h1 className="container">loading....</h1>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Trending Today</h1>
      <div className="cards-container">
        {trendingMovies?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            mediaType={movie.media_type}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            name={movie.name}
            title={movie.title}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        countPage={countPage}
        marginPagesDisplayed={2}
      />
    </div>
  );
};
