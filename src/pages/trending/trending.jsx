import React, { useEffect, useState } from "react";

import { MovieCard } from "../../components/movie-card/movie-card";
import { useTrending } from "../../hooks/use-trending";
import { Pagination } from "../../components/pagination/pagination";
import { scrollToTop } from "../../util/scroll";

export const Trending = () => {
  const [currentPage, setPage] = useState(1);
  const { data, isLoading } = useTrending(currentPage);

  const countPage = data?.total_pages;
  const trendingMovies = data?.results;

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
      <h1 className="page-title">Trending Today</h1>
      <div className="cards-container">
        {trendingMovies?.map((movie) => (
          <MovieCard
            key={movie.id}
            mediaType={movie.media_type}
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
