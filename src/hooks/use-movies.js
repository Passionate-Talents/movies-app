import axios from "axios";
import { useQuery } from "react-query";

export const useMovies = (currentPage, genres) => {
    return useQuery(
        ["movies", currentPage, genres],
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=75e866c4604ea7aec93849337a458853&page=${currentPage}&with_genres=${genres}`
            );
        }, {
            keepPreviousData: true,
        }
    );
};