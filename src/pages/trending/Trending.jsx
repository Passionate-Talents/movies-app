import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { MovieCard } from "../../Componnets/movie-card/MovieCard";
import { fetchTrendingMovies } from "../../util/fetch-trending-movies";
import ReactPaginate from "react-paginate";

export const Trending = () => {
  const [countPage, setCountPage] = useState(0);
  const [page, setPage] = useState(1);

  const {
    data: trendingMovies,
    isLoading,
    isError,
  } = useQuery(["trending-movies", page], fetchTrendingMovies, {
    keepPreviousData: true,
  });

  useEffect(() => {
    setCountPage(trendingMovies?.total_pages);
  }, [trendingMovies]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);

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
      <ReactPaginate
        breakLabel={"..."}
        pageCount={countPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages"}
        forcePage={page - 1}
        previousClassName={"hide"}
        breakLinkClassName={"break-label"}
        nextClassName={"hide"}
        activeLinkClassName={"page-link-active"}
        pageLinkClassName={"page-link"}
      />
    </div>
  );
};
