import React, { useEffect, useState } from "react";

import { Chip } from "../../components/chip/chip";
import { MovieCard } from "../../components/movie-card/movie-card";
import { useMovies } from "../../hooks/use-movies";
import { useMovieGenres } from "../../hooks/use-movie-genre";
import { Pagination } from "../../components/pagination/pagination";
import { scrollToTop } from "../../util/scroll";

export const Movies = () => {
  const [currentPage, setPage] = useState(1);
  const { data, isLoading } = useMovies(currentPage);
  const { data: dataChip } = useMovieGenres();
  const countPage = data?.data?.total_pages;

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
      <p className="page-title">DISCOVER MOVIES</p>
      <div className="button-container">
        {dataChip &&
          dataChip.data.genres.map((geners) => (
            <Chip name={geners.name} id={geners.id} />
          ))}
      </div>
      <div className="cards-container">
        {data &&
          data.data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              mediaType="movie"
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
