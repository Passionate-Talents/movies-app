import axios from "axios";
import { useQuery } from "react-query";

export const useTrending = (currentPage) => {
    return useQuery(
        ["trending-movies", currentPage],
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=1a0525b93e71ae4a85e33829e5132266&page=${currentPage}`
            );
        }, {
            keepPreviousData: true,
            select: (response) => response.data,
        }
    );
};