import React, { useState } from "react";

import { MovieCard } from "../../components/movie-card/movie-card";
import { Pagination } from "../../components/pagination/pagination";
import { SearchGroup } from "../../components/search-group/search-group";
import { useSearch } from "../../hooks/use-search";
import { scrollToTop } from "../../util/scroll";
import { SearchByButton } from "../../components/search-by-button/search-by-button";

export const Search = () => {
  const [searchBy, setSearchBy] = useState("movie");
  const [currentPage, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useSearch(searchValue, currentPage, searchBy);

  const handlePageClick = (page) => {
    setPage(page);
    scrollToTop();
  };

  const countPage = data?.total_pages;
  const searchedMovies = data?.results;

  const handleSearchBy = (type) => {
    setPage(1);
    setSearchBy(type);
  };

  return (
    <div className="container">
      <SearchGroup setSearchValue={setSearchValue} />
      <div className="search-by-group">
        <SearchByButton
          handleSearchBy={handleSearchBy}
          value={"movie"}
          lable={"search movies"}
          searchBy={searchBy}
        />
        <SearchByButton
          handleSearchBy={handleSearchBy}
          value={"tv"}
          lable={"search tv series"}
          searchBy={searchBy}
        />
      </div>
      <div className="cards-container">
        {isLoading && <h1 className="container">loading....</h1>}
        {searchedMovies?.map((movie) => (
          <MovieCard
            key={movie.id}
            mediaType={searchBy}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            name={movie.name}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
      {countPage > 1 && (
        <Pagination
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          countPage={countPage}
          marginPagesDisplayed={2}
        />
      )}
    </div>
  );
};
