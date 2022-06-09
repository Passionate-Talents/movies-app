import React, { useEffect, useState } from "react";

import { MovieCard } from "../../components/movie-card/movie-card";
import { useMovies } from "../../hooks/use-movies";
import { Pagination } from "../../components/pagination/pagination";
import { scrollToTop } from "../../util/scroll";
import { Genres } from "../../components/genres/genres";
import { genresUrl } from "../../util/genres-url";

export const Movies = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genresIds = selectedGenres.map((genre) => genre.id);

  const [currentPage, setPage] = useState(1);
  const { data, isLoading } = useMovies(currentPage, genresUrl(genresIds));

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
        <Genres
          type={"movie"}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
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
