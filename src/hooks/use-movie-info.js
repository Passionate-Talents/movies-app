import axios from "axios";
import { useQuery } from "react-query";

export const useMovieInfo = (mediaType, id) => {
    return useQuery(
        ["movie-info", mediaType, id],
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=1a0525b93e71ae4a85e33829e5132266&language=en-US`
            );
        }, { select: (response) => response.data }
    );
};