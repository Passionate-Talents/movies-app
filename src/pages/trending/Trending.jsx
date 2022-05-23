import React, { useState } from "react";

import { MovieCard } from "../../Componnets/movie-card/MovieCard";
import { useTrendingApi } from "../../api/api-trending";
import { Pagination } from "../../Componnets/pagination/pagination";

export const Trending = () => {
  const [currentPage, setPage] = useState(1);

  const { data, isLoading, isError } = useTrendingApi([
    "trending-movies",
    currentPage,
  ]);

  const countPage = data?.data?.total_pages;

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
        {data?.data?.results.map((movie) => (
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
