import axios from "axios";
import { useQuery } from "react-query";

export const useSeries = (currentPage) => {
    return useQuery(
        ["tv-series", currentPage],
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/discover/tv?api_key=1a0525b93e71ae4a85e33829e5132266&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`, {
                    page: currentPage,
                }
            );
        }, {
            keepPreviousData: true,
            select: (response) => response.data,
        }
    );
};