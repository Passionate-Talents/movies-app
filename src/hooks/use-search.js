import { useQuery } from "react-query";
import axios from "axios";

export const useSearch = (searchText, currentPage, searchBy) => {
    return useQuery(
        ["search", searchText, currentPage, searchBy],
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/search/${searchBy}?api_key=1a0525b93e71ae4a85e33829e5132266&language=en-US`, {
                    params: {
                        query: searchText,
                        page: currentPage,
                    },
                }
            );
        }, {
            keepPreviousData: true,
            select: (response) => response.data,
            enabled: !!searchText,
        }
    );
};