import axios from "axios";
import { useQuery } from "react-query";

export const useTrendingApi = (queryKey) => {
    const [, page] = queryKey;
    return useQuery(
        queryKey,
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=1a0525b93e71ae4a85e33829e5132266&page=${page}}`
            );
        }, {
            keepPreviousData: true,
        }
    );
};