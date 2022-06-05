import React, { useEffect, useState } from "react";

import { MovieCard } from "../../components/movie-card/movie-card";
import { useSeries } from "../../hooks/use-series";
import { Pagination } from "../../components/pagination/pagination";
import { scrollToTop } from "../../util/scroll";

export const Series = () => {
  const [currentPage, setPage] = useState(1);
  const { data, isLoading } = useSeries(currentPage);

  const countPage = data?.total_pages;
  const series = data?.results;

  const handlePageClick = (page) => {
    setPage(page);
    scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
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
