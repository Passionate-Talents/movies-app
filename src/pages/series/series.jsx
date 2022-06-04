import React, { useEffect, useState } from "react";

import { MovieCard } from "../../Componnets/movie-card/MovieCard";
import { useSeries } from "../../api/api-series";
import { Pagination } from "../../Componnets/pagination/pagination";

export const Series = () => {
  const [currentPage, setPage] = useState(1);

  const { data, isLoading, isError } = useSeries(currentPage);

  const countPage = data?.total_pages;

  const series = data?.results;

  const handlePageClick = (page) => {
    setPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (isLoading) {
    return <h1 className="container">loading....</h1>;
  }

  return (
    <div className="container">
      <h1 className="page-title">discover series</h1>
      <div className="cards-container">
        {series?.map((movie) => (
          <MovieCard
            key={movie.id}
            mediaType="tv"
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            name={movie.name}
            title={movie.title}
            id={movie.id}
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
