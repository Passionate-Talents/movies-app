import axios from "axios";
import { useQuery } from "react-query";

export const useChipApi = () => {
    return useQuery(
        ["chip"],
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=75e866c4604ea7aec93849337a458853`
            );
        }, {
            keepPreviousData: true,
        }
    );
};