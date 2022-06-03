import React, { useState } from "react";

import { Chip } from "../../Componnets/chip/chip";
import { MovieCard } from "../../Componnets/movie-card/MovieCard";
import { useMoviesApi } from "../../api/api-movies";
import { useChipApi } from "../../api/api-chip";
import { Pagination } from "../../Componnets/pagination/pagination";

export const Movies = () => {
  const [currentPage, setPage] = useState(1);
  const { data, isLoading, isError } = useMoviesApi(currentPage);
  const { data :dataChip } = useChipApi();
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
      <p className="page-title">DISCOVER MOVIES</p>
      <div className="button-container">
        {dataChip &&
          dataChip.data.genres.map((geners) => (
            <Chip
              name={geners.name}
              id={geners.id}
            />
          ))}
      </div>
      <div className="cards-container">
        {data &&
          data.data.results.map((movie) => (
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
